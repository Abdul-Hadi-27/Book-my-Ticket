import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import EventBooking from "./EventBooking";

const MovieBooking = () => {
  const { id, title } = useParams();
  const navigate = useNavigate();

  const theatres = useSelector((state) => state.theatreReducer.theatres);
  const movies = useSelector((state) => state.movieReducer.movies);

  const [hoveredShow, setHoveredShow] = useState(null);

  // ✅ SINGLE movie object
  const movie = movies.find((m) => m.id == id);

  // ✅ theatres where this movie is playing
  const filteredTheatres = theatres.filter((t) =>
    t.screens.some((screen) => screen.movieId == id)
  );

  return title === "movies" ? (
    <div>
      {/* MOVIE DETAILS */}
      {movie && (
        <div className="px-10 mt-6">
          <h1 className="text-3xl font-bold mb-2">
            {movie.title} ({movie.language})
          </h1>

          <div className="flex gap-3">
            <span className="border px-3 py-1 rounded-full bg-white text-sm">
              Runtime: {movie.duration}
            </span>

            {movie.genre
              .split(",")
              .slice(0, 2)
              .map((g, i) => (
                <span
                  key={i}
                  className="border px-3 py-1 rounded-full bg-white text-sm"
                >
                  {g.trim()}
                </span>
              ))}
          </div>
        </div>
      )}

      {/* THEATRES */}
      {filteredTheatres.map((t) => (
        <div
          key={t.id}
          className="flex bg-gray-100 border border-gray-300 mt-6 mx-6 p-4"
        >
          {/* THEATRE INFO */}
          <div className="w-1/3">
            <img
              src={t.logo}
              alt={t.name}
              className="w-20 object-contain border p-1 mb-2"
            />
            <h2 className="text-xl font-semibold">{t.name}</h2>
            <p className="text-sm text-gray-700">{t.location}</p>
          </div>

          {/* SCREENS + SHOWTIMES */}
          <div className="w-2/3">
            {t.screens.map((screen) => (
              <div key={screen.screenId} className="mb-4">
                <div className="flex gap-3 flex-wrap">
                  {screen.showTimes.map((time, index) => (
                    <div
                      key={index}
                      className="relative"
                      onMouseEnter={() =>
                        setHoveredShow({
                          time,
                          screenId: screen.screenId,
                        })
                      }
                      onMouseLeave={() => setHoveredShow(null)}
                    >
                      <button
                        onClick={() =>
                          navigate(`/info/${title}/${id}/seatbooking`, {
                            state: {
                              movieName: movie?.title,
                              selectedTime: time,
                              theatreName: t.name,
                              theatreLocation: t.location,
                              screenId: screen.screenId,
                              category: screen.category,
                              price: screen.price,
                            },
                          })
                        }
                        className="border-2 border-green-600 px-4 py-1 rounded text-sm hover:bg-green-50"
                      >
                        {time}
                      </button>

                      {hoveredShow?.time === time &&
                        hoveredShow?.screenId === screen.screenId && (
                          <div className="absolute bottom-10 left-0 bg-white border shadow-lg p-3 rounded w-48 z-50">
                            <p className="text-sm font-semibold">
                              Screen: {screen.category}
                            </p>
                            <p className="text-sm">
                              Available Seats:{" "}
                              <span className="text-green-600 font-medium">
                                {screen.availableSeats}
                              </span>
                            </p>
                            <p className="text-sm font-bold text-green-600">
                              ₹ {screen.price}
                            </p>
                          </div>
                        )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ) : (
    <EventBooking />
  );
};

export default MovieBooking;
