import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Reviews from "../components/Reviews";
import axios from "axios";

const CommonDetail = () => {
  const { id, title } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/reviews");
        setReviews(data);
      } catch (error) {
        console.log(error);
      }
    };

    getReviews();
  }, []);

  const sports = useSelector((state) => state.sportReducer.sports);
  const movies = useSelector((state) => state.movieReducer.movies);
  const events = useSelector((state) => state.eventReducer.events);

  let data = [];

  if (title === "sports") data = sports;
  if (title === "movies") data = movies;
  if (title === "events") data = events;

  const filteredId = data.filter((s) => s.id == id);

  // ⭐ helper function to format dates
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  };

  let renderDetail = filteredId.map((item) => {
    return (
      <div key={item.id}>
        <div
          className="bg-red-400 h-120 bg-cover relative bg-center bg-no-repeat w-full"
          style={{ backgroundImage: `url(${item.poster})` }}
        >
          <div className="absolute flex items-center bg-image inset-0 px-30 bg-black/60">
            <div className="bg-red-400 absolute flex top-10 h-105 rounded w-[320px]">
              <img
                className="h-full shadow-xl shadow-white rounded w-full"
                src={item.poster}
              />
            </div>
            <div className="flex flex-col absolute left-120 text-white justify-center w-[50%]">
              <h1 className="text-4xl font-bold">{item.title}</h1>
              <p className="mt-2 text-lg">{item.category}</p>

              {item.date && (
                <p className="mt-2 text-lg font-semibold">
                  Date: {formatDate(item.date)}
                </p>
              )}

              {item.releaseDate && (
                <p className="mt-2 text-lg font-semibold">
                  Release Date: {formatDate(item.releaseDate)}
                </p>
              )}

              {item.genre && <h2 className="text-md">Genre: {item.genre}</h2>}
              {item.venue && <p className="mt-2 text-lg">Venue: {item.venue}</p>}
              {item.language && <h2 className="text-md">Language: {item.language}</h2>}
              {item.rating && <h2 className="text-md">Rating: ⭐ {item.rating}</h2>}
              {item.duration && <h2 className="text-md">Duration: {item.duration}</h2>}

              <Link
                to={`/info/${title}/${id}/booking`}
                className="bg-red-500 py-2 px-5 rounded active:scale-95 hover:bg-red-400 transition w-fit mt-5 cursor-pointer"
              >
                Book My Ticket
              </Link>
            </div>
          </div>
        </div>

        <div className="text-xl px-20 mt-10">
          {item.description && (
            <p className="text-md font-extralight">
              <h3 className="text-2xl font-semibold px-12">About the Movie</h3>
              {item.description}
            </p>
          )}
        </div>

        <div className="mt-15">
          <Reviews data={reviews} itemId={item.itemId} />
        </div>
      </div>
    );
  });

  return <div className="h-full w-full">{renderDetail}</div>;
};

export default CommonDetail;
