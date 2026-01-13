import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies:[]
};
const MovieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    loadmovies:(state,action)=>{
        state.movies=action.payload;
    },
     addmovie: (state, action) => {
      state.movies.push(action.payload);
    },
    updatemovie: (state, action) => {
      const index = state.movies.findIndex((m) => m.id === action.payload.id);
      if (index == -1) return;
      else {
        state.movies[index] = action.payload;
      }
    },
    deletemovie: (state, action) => {
      state.movies = state.movies.filter((e) => e.id !== action.payload.id);
    },
  },
});
 export const {loadmovies,addmovie,updatemovie,deletemovie}=MovieSlice.actions;
 export default MovieSlice.reducer;
