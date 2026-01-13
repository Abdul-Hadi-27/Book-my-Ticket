import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const EventBooking = () => {
  const { id, title } = useParams();
  // console.log(title,id)
  const booking = useSelector((state) => state.bookingReducer.bookings);
  console.log(booking);
  const event = useSelector((state) => state.eventReducer.events);
  console.log(event);

  const filteredEvent = event.filter((e) => e.id == id);
  console.log(filteredEvent);
  let renderevent = filteredEvent.map((f) => {
    return (
      <div key={f.id} className="flex flex-col ">
       <div className="bg-red-400 h-40 w-full flex  items-center justify-center  ">
         <div className="flex flex-col items-center cursor-default ">
          <h1 className="text-4xl font-semibold hover:underline  ">{f.title}</h1>
          <h2 className="text-xl">Venue:{f.venue}</h2>
        <div className="flex gap-x-2">
              <h2 className="text-lg">Date :{new Date(f.date).toISOString().split("T")[0]} | </h2>
          <h2 className="text-lg">
            Time:
            {new Date(f.date).toLocaleTimeString("en-IN", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </h2>
        </div>
 
        </div>
       </div>
      </div>
    );
  });
 let renderbooking=booking.map((b)=>{
    return <div key={b.id} className="bg-green-600 w-full  h-full">
        <div><h1>hey</h1></div>
    </div>
 })


  return <div>{renderevent}{renderbooking}
  </div>;
};

export default EventBooking;
