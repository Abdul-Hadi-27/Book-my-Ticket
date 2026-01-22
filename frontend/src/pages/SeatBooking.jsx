import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetbookings } from "../store/actions/BookingActions";


const SeatBooking = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();

  if (!state) {
    return <p>Please select show time again</p>;
  }

  const {
    movieId,
    theatreId,
    movieName,
    selectedTime,
    theatreName,
    theatreLocation,
    screenId,
    category,
    price,
  } = state;

  // 🔹 Load bookings from backend
  useEffect(() => {
    dispatch(asyncgetbookings());
  }, [dispatch]);

  // 🔹 Redux bookings
  const bookings = useSelector((state) => state.bookingReducer.bookings);
console.log(bookings)
  // 🔹 Extract REAL booked seats for current show
  const bookedSeats = bookings
    .filter(
      (b) =>
        b.movieId === String(movieId) &&
        b.screenId === String(screenId) &&
        b.showTime === selectedTime
    )
    .flatMap((b) => b.seats);
console.log(movieId)
  // 🔹 Seat setup
  const rows = ["A", "B", "C", "D", "E"];

  const seatCategory = {
    A: { type: "Recliner", price: 150 },
    B: { type: "Gold", price: 200 },
    C: { type: "Gold", price: 200 },
    D: { type: "VVIP", price: 300 },
    E: { type: "VVIP", price: 300 },
  };

  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatId) => {
    if (bookedSeats.includes(seatId)) return;

    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((s) => s !== seatId)
        : [...prev, seatId]
    );
  };

  const totalPrice = selectedSeats.reduce(
    (sum, seat) => sum + seatCategory[seat[0]].price,
    0
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">

      {/* MOVIE INFO */}
      <div className="bg-gray-800 p-4  rounded mb-6">
        <p><b>Movie:</b> {movieName}</p>
        <p><b>Theatre:</b> {theatreName}, {theatreLocation}</p>
        <p><b>Screen:</b> {category}</p>
        <p><b>Show Time:</b> {selectedTime}</p>
        <p><b>Base Price:</b> ₹{price}</p>
      </div>

      {/* SCREEN */}
      <div className="text-center mb-6">
        <div className="w-4/5 mx-auto h-2 bg-gray-400 rounded-full mb-2"></div>
        <p className="text-xs text-gray-400">SCREEN THIS WAY</p>
      </div>

      {/* SEATS */}
      <div className="space-y-5">
        {rows.map((row) => (
          <div key={row}>
            <p className="text-xs text-gray-400 mb-1">
              {row} Row – {seatCategory[row].type} ₹{seatCategory[row].price}
            </p>

            <div className="flex justify-center gap-2">
              {Array.from({ length: 12 }, (_, i) => {
                const seatId = `${row}${i + 1}`;
                const isBooked = bookedSeats.includes(seatId);
                const isSelected = selectedSeats.includes(seatId);

                return (
                  <div
                    key={seatId}
                    onClick={() => handleSeatClick(seatId)}
                    className={`
                      w-8 h-8 text-xs rounded flex items-center justify-center
                      ${
                        isBooked
                          ? "bg-red-600 cursor-not-allowed"
                          : isSelected
                          ? "bg-green-600"
                          : "bg-gray-600 hover:bg-gray-500 cursor-pointer"
                      }
                    `}
                  >
                    {i + 1}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* SUMMARY */}
      <div className="bg-gray-800 p-4 rounded mt-6">
        <p>
          <b>Selected Seats:</b>{" "}
          {selectedSeats.length ? selectedSeats.join(", ") : "None"}
        </p>
        <p className="text-lg mt-2">
          <b>Total Price:</b> ₹{totalPrice}
        </p>
      </div>
    </div>
  );
};

export default SeatBooking;
