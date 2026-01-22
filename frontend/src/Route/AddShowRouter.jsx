import { useParams } from "react-router-dom";
import MovieList from "../pages/MovieList";
import SportList from "../pages/SportList";
import EventList from "../pages/EventList";
import PartyList from "../pages/PartyList";
import Expositions from "../pages/Expositions";
import Conferences from "../pages/Conferences";
const AddShowRouter = () => {
  const { title } = useParams();

  if (title === "movies") return <MovieList />;
  if (title === "sports") return <SportList />;
  if (title === "events") return <EventList />;
  if (title === "parties") return <PartyList />;
  if (title === "expositions") return <Expositions />;
  if (title === "conference") return <Conferences />;

  return <h1>Invalid Category</h1>;
};

export default AddShowRouter;
