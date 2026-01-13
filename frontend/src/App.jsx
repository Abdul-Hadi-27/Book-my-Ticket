import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Mainroutes from "./Route/Mainroutes";
import { asyncgetsports } from "./store/actions/SportActions";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetevents } from "./store/actions/EventActions";
import { asyncgetmovies } from "./store/actions/MovieActions";
import { asyncgettheatre } from "./store/actions/TheatreActions";
import { asyncgetbookings } from "./store/actions/BookingActions";
import Login from "./components/Login";
import { closeAuth } from "./store/reducers/UiSlice";
import Register from "./components/Register";
import { asynccurrentuser } from "./store/actions/UserActions";

const App = () => {
  const isAuthOpen = useSelector((state) => state.uiReducer.isAuthOpen);
  // console.log(isAuthOpen);
  const authMode = useSelector((s) => s.uiReducer.authMode);


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncgetsports());
    dispatch(asyncgetevents());
    dispatch(asyncgetmovies());
    dispatch(asyncgettheatre());
    dispatch(asyncgetbookings());
    dispatch(asynccurrentuser());
  }, []);
  useEffect(() => {
  if (isAuthOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [isAuthOpen]);

  return (
    <div className="  min-h-screen w-screen">
      <Navbar />
      <Mainroutes />
     {isAuthOpen && (
  <div
    onClick={() => dispatch(closeAuth())}   // <- overlay click close
    className="fixed inset-0 z-100  bg-opacity-50 flex items-center justify-center backdrop-blur bg-white/30"
  >
    <div
      onClick={(e) => e.stopPropagation()}  // <- stops from closing
      className="bg-white p-6 rounded-xl border relative"
    >
      <button
        onClick={() => dispatch(closeAuth())}
        className="absolute right-2 top-2 cursor-pointer"
      >
        X
      </button>

      {authMode === "login" && <Login />}
      {authMode === "register" && <Register />}
    </div>
  </div>
)}


    </div>
  );
};

export default App;
