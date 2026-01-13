import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncregisteruser } from "../store/actions/UserActions";
import { closeAuth, switchToLogin } from "../store/reducers/UiSlice";
import { toast } from "react-toastify";

const Register = () => {
  const { register, handleSubmit, formState:{errors} } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const RegisterHandler = (user) => {
    dispatch(asyncregisteruser(user)).then((res)=>{
      if(res.success){
        toast.success('User registered!');
        dispatch(closeAuth());
        navigate('/');
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(RegisterHandler)} className="w-75 flex flex-col items-center">
      <h2 className="text-2xl mb-3">Create Account</h2>

      <input
        {...register("name", { required: "Name is required" })}
        className="mb-1 p-2 border rounded w-full"
        type="text"
        placeholder="Full Name"
      />
      {errors.name && <small className="text-red-500">{errors.name.message}</small>}

      <input
        {...register("email", { 
          required: "Email is required",
          pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" }
        })}
        className="mb-1 p-2 border rounded w-full"
        type="email"
        placeholder="Email"
      />
      {errors.email && <small className="text-red-500">{errors.email.message}</small>}

      <input
        {...register("password", { 
          required: "Password is required",
          minLength: { value: 4, message: "Password must be at least 4 characters" }
        })}
        className="mb-1 p-2 border rounded w-full"
        type="password"
        placeholder="Password"
      />
      {errors.password && <small className="text-red-500">{errors.password.message}</small>}
      <input
        {...register("phonenumber", { 
          required: "Phone Number is required",
          minLength: { value: 10, message: "Phone Number must be at of 10 digits" }
        })}
        className="mb-1 p-2 border rounded w-full"
        type="number"
        placeholder="Phone Number"
      />
      {errors.phonenumber && <small className="text-red-500">{errors.phonenumber.message}</small>}

      <button className="bg-red-500 text-white px-4 py-2 rounded mt-3">Register</button>

      <p className="mt-4 text-sm">Already have an account?{" "}
        <span onClick={() => dispatch(switchToLogin())} className="text-red-600 cursor-pointer hover:underline">Login</span>
      </p>
    </form>
  );
};
export default Register;