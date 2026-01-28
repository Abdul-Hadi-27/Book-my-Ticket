import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "../api/axiosConfig";

const SportList = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async (data) => {
    try {
      const finalDateTime = `${data.date} ${data.time}`;

      const sportsPayload = {
        title: data.sportsName,
        venue: data.venue,
        category: data.category,
        poster: data.posterUrl,
        date: finalDateTime,
      };

      const sportsRes = await axios.post("https://intuitive-essence-production.up.railway.app/sports", sportsPayload);
      console.log("Created Sports:", sportsRes.data);

      reset();
      navigate("/admin/add-show");
    } catch (error) {
      console.error("Error saving sports details:", error);
    }
  };

  return (
    <div className="w-full p-8 bg-gray-100 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow p-8 border">

        <h1 className="text-3xl font-semibold mb-6 text-gray-800 text-center">
          Add Sports Details
        </h1>

        <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">

          {/* SPORTS NAME */}
          <div>
            <input
              {...register("sportsName", { required: "Match details is required" })}
              placeholder="Matches Detail (e.g., Ind vs Aus, MSC vs MBSG)"
              className="w-full border rounded p-2 focus:ring focus:ring-blue-300"
            />
            {errors.sportsName && <p className="text-red-500 text-sm mt-1">{errors.sportsName.message}</p>}
          </div>

          {/* VENUE */}
          <div>
            <input
              {...register("venue", { required: "Venue is required" })}
              placeholder="Venue (e.g., Eden Gardens)"
              className="w-full border rounded p-2 focus:ring focus:ring-blue-300"
            />
            {errors.venue && <p className="text-red-500 text-sm mt-1">{errors.venue.message}</p>}
          </div>

          {/* CATEGORY */}
          <div>
            <input
              {...register("category", { required: "Category is required" })}
              placeholder="Category (Cricket, Football, etc)"
              className="w-full border rounded p-2 focus:ring focus:ring-blue-300"
            />
            {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
          </div>

          {/* POSTER URL */}
          <div>
            <input
              {...register("posterUrl", {
                required: "Poster URL is required",
                pattern: { message: "Please enter a valid URL" },
              })}
              placeholder="Poster Image URL"
              className="w-full border rounded p-2 focus:ring focus:ring-blue-300"
            />
            {errors.posterUrl && <p className="text-red-500 text-sm mt-1">{errors.posterUrl.message}</p>}
          </div>

          {/* DATE + TIME */}
          <div className="flex gap-3">
            <input
              type="date"
              {...register("date", { required: "Date is required" })}
              className="w-1/2 border rounded p-2 focus:ring focus:ring-blue-300"
            />
            <input
              type="time"
              {...register("time", { required: "Time is required" })}
              className="w-1/2 border rounded p-2 focus:ring focus:ring-blue-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded mt-4 transition"
          >
            Save Sports Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default SportList;
