import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "../api/axiosConfig";
import { asyncgettheatre } from "../store/actions/TheatreActions";

const MovieList = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async (data) => {
    try {
      /* ===================== 1️⃣ CREATE MOVIE ===================== */
      const moviePayload = {
        title: data.movieName,
        language: data.language,
        genre: data.genre,
        duration: data.runtime,
        poster: data.posterUrl,
        rating: 5,
        price: Number(data.price),
        description: "",
        category: "Movie",
        releaseDate: new Date().toISOString().split("T")[0],
      };

      const movieRes = await axios.post("/movies", moviePayload);
      const createdMovie = movieRes.data;

      /* ===================== 2️⃣ GET ALL THEATRES ===================== */
      const { data: theatres } = await axios.get("/theaters");

      /* ===================== 3️⃣ CREATE SCREEN ===================== */
      const newScreen = {
        screenId: Date.now(),
        movieId: createdMovie.id,
        category: data.screenCategory,
        price: Number(data.price),
        availableSeats: Number(data.availableSeats),
        showTimes: data.showTimes
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
      };

      /* ===================== 4️⃣ FIND THEATRE ===================== */
      const existingTheatre = theatres.find(
        (t) =>
          t.name.toLowerCase() === data.theatreName.toLowerCase() &&
          t.location.toLowerCase() === data.location.toLowerCase()
      );

      /* ===================== 5️⃣ UPDATE OR CREATE THEATRE ===================== */
      if (existingTheatre) {
        const updatedTheatre = {
          ...existingTheatre,
          logo: data.theatreLogo, // ✅ UPDATE LOGO
          screens: [newScreen],   // ONE SCREEN ONLY
        };

        await axios.put(`/theaters/${existingTheatre.id}`, updatedTheatre);
      } else {
        const newTheatre = {
          name: data.theatreName,
          location: data.location,
          logo: data.theatreLogo, // ✅ SAVE LOGO
          screens: [newScreen],
        };

        await axios.post("/theaters", newTheatre);
      }

      /* ===================== 6️⃣ REFRESH THEATRES ===================== */
      await dispatch(asyncgettheatre());

      reset();
      navigate("/admin/add-show");
    } catch (error) {
      console.error("Error saving movie & theatre:", error);
    }
  };

  return (
    <div className="p-8 w-full">
      <h1 className="text-3xl font-bold mb-6">Add Movie + Theatre</h1>

      <form
        onSubmit={handleSubmit(submitHandler)}
        className="grid grid-cols-2 gap-4"
      >
        {/* ================= MOVIE DETAILS ================= */}
        <h2 className="col-span-2 text-xl font-semibold">Movie Details</h2>

        <input {...register("movieName")} placeholder="Movie Name" className="border p-2" />
        <input {...register("runtime")} placeholder="Runtime (2h 30m)" className="border p-2" />
        <input {...register("genre")} placeholder="Genre (Action, Drama)" className="border p-2" />
        <input {...register("language")} placeholder="Language" className="border p-2" />

        <input
          {...register("posterUrl")}
          placeholder="Movie Poster URL"
          className="border p-2 col-span-2"
        />

        {/* ================= THEATRE DETAILS ================= */}
        <h2 className="col-span-2 text-xl font-semibold mt-4">
          Theatre Details
        </h2>

        <input {...register("theatreName")} placeholder="Theatre Name" className="border p-2" />
        <input {...register("location")} placeholder="Location" className="border p-2" />

        {/* ⭐ NEW THEATRE LOGO FIELD */}
        <input
          {...register("theatreLogo")}
          placeholder="Theatre Logo URL"
          className="border p-2 col-span-2"
        />

        {/* ================= SCREEN DETAILS ================= */}
        <h2 className="col-span-2 text-xl font-semibold mt-4">
          Screen Details
        </h2>

        <input {...register("screenCategory")} placeholder="Screen Category (IMAX / GOLD)" className="border p-2" />
        <input {...register("price")} type="number" placeholder="Ticket Price" className="border p-2" />
        <input {...register("availableSeats")} type="number" placeholder="Available Seats" className="border p-2" />

        <input
          {...register("showTimes")}
          placeholder="Show Times (10:00 AM, 2:00 PM)"
          className="border p-2 col-span-2"
        />

        <button
          type="submit"
          className="col-span-2 bg-blue-600 text-white py-2 rounded mt-4"
        >
          Save Movie & Theatre
        </button>
      </form>
    </div>
  );
};

export default MovieList;
