import { useSelector } from "react-redux";
import Slider from "../components/Slider";
import RenderHome from "../components/RenderHome";

const Home = () => {
  const movie = useSelector((state) => state.movieReducer.movies);
  const event = useSelector((state) => state.eventReducer.events);
  const sport = useSelector((state) => state.sportReducer.sports);
  return (
    <>
      <div
        className=" h-70 w-full
    "
      >
        <Slider />
      </div>
      <div className="text-center mt-8">
        <h2 className="text-lg">Recommended Movies</h2>
      </div>
      {/* rendering Movies */}
      <div className="flex mt-5 m-auto w-[80%] justify-center  items-center gap-x-5  overflow-x-auto no-scroll  ">
        {/* <div className="flex justify-center w-full mt-4">
          <h2  className="text-lg font-medium">Recommended Movies</h2>
        </div> */}
        <RenderHome data={movie} title="movies" />
      </div>

      <div
        className="h-30 w-[80%] m-auto rounded-2xl bg-red-500 mt-8
      bgimg"
      >
        <div className="flex justify-center items-center w-full h-full">
          <div className="flex justify-between   w-full">
            <div className=" w-1/3 flex flex-col items-center justify-center">
              <h1 className="text-3xl uppercase font-bold text-white">
                Book my Date
              </h1>
              <span className="text-2xl  italic font-semibold text-red-500">
                Stream
              </span>
            </div>
            <div className=" w-1/2 flex items-center  justify-center">
              <p className="text-2xl z-100 font-semibold  text-orange-700 tracking-wide">
                Endless Entertainment Anytime. Anywhere!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <h2 className="text-lg">Recommended Events</h2>
      </div>
      {/* rendering events */}
      <div className="flex mt-5 m-auto w-[80%] justify-center  items-center gap-x-5  overflow-x-auto no-scroll     ">
        {/* <div className="flex justify-center  w-full mt-4">
          <h2 className="text-lg font-medium">Recommended Events</h2>
        </div> */}
        <RenderHome data={event} title="events" />
      </div>
      <div className="text-center mt-8">
        <h2 className="text-lg">Recommended Sports</h2>
      </div>

      {/* {rendering sports} */}
      <div className="flex mt-5 m-auto w-[80%] justify-center   items-center gap-x-5  overflow-x-auto no-scroll     ">
        {/* <div className="flex justify-center w-full mt-4">
          <h2 className="text-lg font-medium">Recommended Sports</h2>
        </div> */}

        <RenderHome data={sport} title="sports" />
      </div>
      <div>
        <h2>Recommended Movies</h2>
      </div>
    </>
  );
};

export default Home;
