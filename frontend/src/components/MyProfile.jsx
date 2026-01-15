import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  asyncdeleteuser,
  asyncupdateuser,
} from "../store/actions/UserActions";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Pencil } from "lucide-react";

const MyProfile = () => {
  const user = useSelector((state) => state.userReducer.users);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [preview, setPreview] = useState(null);

  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      name: user?.name,
      email: user?.email,
      password: user?.password,
      phonenumber: user?.phonenumber,
    },
  });

  // update info (name,email,...)
  const UpdateUserHandler = (formData) => {
    const updatedData = {
      ...user,
      ...formData,
      photo: user.photo || "",
    };

    dispatch(asyncupdateuser(user.id, updatedData));
    toast.success("Profile info updated!");
    setIsEditing(false);
  };

  // update photo only
  const SavePhotoHandler = () => {
    const updatedData = {
      ...user,
      photo: preview ? preview : user.photo || "",
    };

    dispatch(asyncupdateuser(user.id, updatedData));
    toast.success("Profile photo updated!");
    setPreview(null);
  };

  const DeleteHandler = () => {
    dispatch(asyncdeleteuser(user.id));
    toast.success("User Deleted!");
    navigate("/");
  };

  useEffect(() => {
    if (user) {
      reset({
        name: user?.name,
        email: user?.email,
        password: user?.password,
        phonenumber: user?.phonenumber,
      });
    }
  }, [user,reset]);

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPreview(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return user ? (
    <>
      <div className="h-60 w-full p-4">
        <div className="h-50 w-full bg-gray-600 opacity-90 rounded-2xl p-6">
          <div className="flex items-center gap-x-5">
            <div className="bg-red-200 h-30 w-30 rounded-full">
              <img
                src={preview || user?.photo || "/default-user.png"}
                className="h-30 w-30 rounded-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-y-1">
              <input
                type="file"
                accept="image/*"
                onChange={handlePhoto}
                className="hidden"
                id="photoUpload"
              />

              <label
                htmlFor="photoUpload"
                className="bg-gray-400 opacity-60 rounded-xl p-1 text-xs text-white text-center cursor-pointer"
              >
                Upload new photo
              </label>

              <p className="text-sm text-gray-300">
                Atleast 800×800 px recommended.<br />
                JPG or PNG is allowed.
              </p>

              {preview && (
                <button
                  type="button"
                  onClick={SavePhotoHandler}
                  className="px-3 py-1 bg-green-600 text-white rounded mt-2"
                >
                  Save
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* INFO */}
      <div className="h-50 w-full p-5 select-none">
        <div className="h-40 w-full rounded-2xl p-2 relative">
          <div className="text-center text-4xl">Personal Info</div>
          <div className="flex justify-center items-center flex-col">
            <form
              onSubmit={handleSubmit(UpdateUserHandler)}
              className="flex gap-x-5 w-full p-3 items-center "
            >
              <div className="flex flex-col w-1/2">
                <small className="text-gray-500">Full Name</small>
                <input
                  {...register("name")}
                  type="text"
                  readOnly={!isEditing}
                  className={`outline-none border p-1 text-xl transition ${
                    !isEditing ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "bg-white"
                  }`}
                />
              </div>

              <div className="flex flex-col w-1/2">
                <small className="text-gray-500">Email</small>
                <input
                  {...register("email")}
                  type="email"
                  readOnly={!isEditing}
                  className={`outline-none border p-1 text-xl transition ${
                    !isEditing ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "bg-white"
                  }`}
                />
              </div>

              <div className="flex flex-col w-1/2">
                <small className="text-gray-500">Password</small>
                <input
                  {...register("password")}
                  type="password"
                  readOnly={!isEditing}
                  className={`outline-none border p-1 text-xl transition ${
                    !isEditing ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "bg-white"
                  }`}
                />
              </div>

              <div className="flex flex-col w-1/2">
                <small className="text-gray-500">Phone Number</small>
                <input
                  {...register("phonenumber")}
                  type="text"
                  readOnly={!isEditing}
                  className={`outline-none border p-1 text-xl transition ${
                    !isEditing ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "bg-white"
                  }`}
                />
              </div>

              <div className="absolute top-1 right-0 w-fit gap-3">
                {!isEditing && (
                  <button
                    type="button"
                    onClick={() => setIsEditing(true)}
                    className="px-3 py-1 bg-blue-500 text-white rounded flex items-center gap-1"
                  >
                    <Pencil size={16} /> Edit
                  </button>
                )}

                {isEditing && (
                  <button
                    type="submit"
                    className="px-3 py-1 bg-green-600 text-white rounded"
                  >
                    Update
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>

        <div className="flex gap-x-10 w-full justify-center">
          <button
            type="button"
            onClick={DeleteHandler}
            className="mt-5 px-4 py-2 bg-rose-500 text-white rounded"
          >
            Delete User
          </button>
        </div>
      </div>
    </>
  ) : (
    "Loading..."
  );
};

export default MyProfile;
