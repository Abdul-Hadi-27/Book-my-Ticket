import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Beer, BookOpenText, Landmark, Popcorn, Speech, Trophy } from 'lucide-react';
const ListShows = () => {
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  return (
    <div className="  flex gap-x-2 h-full w-full items-center justify-center  flex-col  ">
        <h1 className="text-5xl font-bold mb-2 mt-10">What can you host ?</h1>
        <p className="text-center text-lg font-sm w-[50%] ">BookmyDate offers end-to-end event solutions — from registration to event completion. Explore what you can host with us.</p>
            
      <div className=" w-[60%]  flex flex-wrap   flex-1 justify-center mt-4 gap-x-10 gap-y-5  py-10   ">
        <button
           onClick={()=>{
            navigate('/admin/add-show/movies')
          }}
          className="h-60 w-60  flex items-center justify-center cursor-pointer flex-col bg-[#ECF5FF] hover:scale-105 transition hover:shadow-[4px_4px_10px_rgba(0,0,0,0.15)]  shadow-gray-500 rounded-2xl "
        >
         <Popcorn size={48} strokeWidth={1.25} />
          <h2 className="text-2xl font-semibold text-gray-950">Movies</h2>
        </button>
        <button
          onClick={()=>{
            navigate('/admin/add-show/sports')
          }}
          className=" h-60 w-60 flex items-center justify-center flex-col bg-[#ECF5FF] hover:scale-105 transition hover:shadow-[4px_4px_10px_rgba(0,0,0,0.15)] shadow-gray-500 rounded-2xl"
        >
         <Trophy size={40} />
          <h2 className="text-2xl font-semibold text-gray-950">Sports</h2>
        </button>
        <button
          onClick={()=>{
            navigate('/admin/add-show/events')
          }}
          className="h-60 w-60  flex items-center justify-center flex-col bg-[#ECF5FF] hover:scale-105 transition hover:shadow-[4px_4px_10px_rgba(0,0,0,0.15)] shadow-gray-500 rounded-2xl"
        >
         <Landmark size={48} strokeWidth={1} />
          <h2 className="text-2xl font-semibold text-gray-950">Events</h2>
        </button>
        <button
          onClick={()=>{
            navigate('/admin/add-show/events')
          }}
          className="h-60 w-60  flex items-center justify-center flex-col bg-[#ECF5FF] hover:scale-105 transition hover:shadow-[4px_4px_10px_rgba(0,0,0,0.15)]  shadow-gray-500 rounded-2xl"
        >
         <Beer size={48} strokeWidth={1.25} />
          <h2 className="text-2xl font-semibold text-gray-950">Parties</h2>
        </button>
        <button
          onClick={()=>{
            navigate('/admin/add-show/events')
          }}
          className="hh-60 w-60  flex items-center justify-center flex-col bg-[#ECF5FF] hover:scale-105 transition hover:shadow-[4px_4px_10px_rgba(0,0,0,0.15)] shadow-gray-500 rounded-2xl"
        >
          <BookOpenText size={48} strokeWidth={1.25} />
          <h2 className="text-2xl font-semibold text-gray-950">Expositions</h2>
        </button>
        <button
          onClick={()=>{
            navigate('/admin/add-show/events')
          }}
          className="h-60 w-60 flex items-center justify-center flex-col bg-[#ECF5FF] hover:scale-105 transition hover:shadow-[4px_4px_10px_rgba(0,0,0,0.15)] shadow-gray-500 rounded-2xl"
        >
          <Speech size={48} strokeWidth={1.25} />
          <h2 className="text-2xl font-semibold text-gray-950">Conferences</h2>
        </button>
      </div>
    </div>
  );
};

export default ListShows;
