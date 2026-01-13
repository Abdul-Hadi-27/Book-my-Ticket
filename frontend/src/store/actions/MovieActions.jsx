import axios from "../../api/axiosConfig";
import { loadmovies } from "../reducers/MovieSlice";


export const asyncgetmovies = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/movies");
    dispatch(loadmovies(data));

    // console.log(data)
  } catch (error) {
    console.log(error);
  }
};

// export const asynccreatemovie = (moviePayload) => async (dispatch) => {
//   try {
//     const res = await axios.post("/movies", moviePayload);
//     const createdMovie = res.data;

//     const { data } = await axios.get("/movies");
//     dispatch(loadmovies(data));

//     return createdMovie; // 👈 VERY IMPORTANT
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };


