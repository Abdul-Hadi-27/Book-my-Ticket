import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Sports from "../pages/Sports";
import Events from "../pages/Events";
import CommonDetail from "../pages/CommonDetail";
import Theatres from "../pages/MovieBooking";
import ListShows from "../pages/ListShows";
import AddShowRouter from "./AddShowRouter";
import UserProfile from "../components/UserProfile";
import Dashboard from "../components/Dashboard";
import MyProfile from "../components/MyProfile";
import MyBookings from "../components/MyBookings";
import Wishlist from "../components/Wishlist";
import Payments from "../components/Payments";
import Settings from "../components/Settings";
import SeatBooking from "../pages/SeatBooking";

const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/events" element={<Events />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/info/:title/:id" element={<CommonDetail />} />
        <Route path="/info/:title/:id/booking" element={<Theatres />} />
        <Route path="/admin/add-show" element={<ListShows />} />
        <Route path="/admin/add-show/:title" element={<AddShowRouter />} />
        <Route path="/info/:title/:id/seatbooking" element={<SeatBooking />} />
       
       
        <Route path="/profile" element={<UserProfile/>}>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="my-profile" element={<MyProfile/>}/>
        <Route path="my-bookings" element={<MyBookings/>}/>
        <Route path="wishlist" element={<Wishlist/>}/>
        <Route path="payments" element={<Payments/>}/>
        <Route path="settings" element={<Settings/>}/>

        </Route>
      </Routes>
    </div>
  );
};

export default Mainroutes;
