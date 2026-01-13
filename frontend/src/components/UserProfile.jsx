import {
  Heart,
  IndianRupee,
  LayoutDashboard,
  Settings,
  Ticket,
  UserPen,
} from "lucide-react";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const UserProfile = () => {
  return (
    <div className="min-h-screen  w-screen   flex font-[Belezza]  ">
      <div className="w-[18%]  bg-gray-200 border-r">
        <div className="flex flex-col gap-y-3 p-4  ">
          <div className="flex items-center mt-4  gap-x-2 ">
            <LayoutDashboard size={17} />
            <Link to='dashboard'>Dashboard</Link>
          </div>
          <hr className="" />
          <div className="flex items-center  gap-x-2 ">
            <UserPen size={17} /> <Link to='my-profile'>My Profile</Link>
          </div>
          <hr className="" />
          <div className="flex items-center  gap-x-2 ">
            <Ticket size={17} /> <Link to='my-bookings'>My Bookings</Link>
          </div>
          <hr className="" />
          <div className="flex items-center  gap-x-2 ">
            <Heart size={17} /> <Link to='wishlist'>Wishlist</Link>
          </div>
          <hr className="" />
          <div className="flex items-center  gap-x-2 ">
            <IndianRupee size={17} /> <Link to='payments'>Payment</Link>
          </div>
          <hr className="" />
          <div className="flex items-center  gap-x-2 ">
            <Settings size={17} /> <Link to='settings'>Settings</Link>
          </div>
          <hr className="" />
        </div>
      </div>
      <div className="w-[82%] h-[calc(100vh - 4rem)]  bg-white">
        <Outlet/>
      </div>
    </div>
  );
};

export default UserProfile;
