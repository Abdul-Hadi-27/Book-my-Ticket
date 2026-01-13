import { useParams } from "react-router-dom";
import MovieList from "../pages/MovieList";
import SportList from "../pages/SportList";
import EventList from "../pages/EventList";

const AddShowRouter = () => {
  const { title } = useParams();

  if (title === "movies") return <MovieList />;
  if (title === "sports") return <SportList />;
  if (title === "events") return <EventList />;

  return <h1>Invalid Category</h1>;
};

export default AddShowRouter;
