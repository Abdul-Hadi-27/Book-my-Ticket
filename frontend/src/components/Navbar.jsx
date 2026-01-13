import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { openAuth } from "../store/reducers/UiSlice";
import { asynclogoutuser } from "../store/actions/UserActions";
import { toast } from "react-toastify";
import UserProfile from "./UserProfile";

const Navbar = () => {
  const user = useSelector((state) => state.userReducer.users);
  console.log(user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
      <div className=" h-16 w-full px-6 py-3 ">
        <nav className="flex items-center justify-between">
          <Link
            to="/"
            className="text-red-500 text-4xl font-[Alegreya] font-thin"
          >
            Book_mydate
          </Link>
          <div className=" flex items-center relative">
            <i className="ri-search-line absolute left-2 font-thin text-gray-500 "></i>
            <input
              type="text"
              className="w-200 px-8 py-1 rounded outline-none border border-gray-500 "
              placeholder="Search for Movies,Events,Sports and more..."
            />
          </div>
          {user ? (
            <button
              onClick={() => {
                dispatch(asynclogoutuser());
                toast.success("Logged out!");
                navigate("/");
              }}
              className="bg-red-400 text-white px-3  py-1 rounded cursor-pointer
          active:scale-95 hover:bg-red-500  transition text-sm "
            >
              Log Out
            </button>
          ) : (
            <button
              onClick={() => {
                dispatch(openAuth());
              }}
              className="bg-red-400 text-white px-3  py-1 rounded cursor-pointer
          active:scale-95 hover:bg-red-500 text-sm transition "
            >
              Sign In
            </button>
          )}
        </nav>
      </div>
      <div className=" w-full flex items-center bg-[#F5F5F5]  ">
        <div className="flex items-center  justify-between w-full">
          <div
            className="flex gap-x-15   items-center 
         px-10"
          >
            <Link to="/events" className="text-md font-thick">
              Events
            </Link>
            <Link to="/movies" className="text-md font-thick">
              Movies
            </Link>
            <Link to="/sports" className="text-md font-thick">
              Sports
            </Link>
          </div>
        </div>
        <div className="px-15 flex gap-x-10 ">
          <Link className="text-md font-thick " to="/admin/add-show">
            {" "}
            ListyourShows
          </Link>
         <Link to='/profile'> {user? "Profile" :''}</Link>
        </div>
        <hr className="text-gray-400" />
      </div>
    </div>
  );
};

export default Navbar;
