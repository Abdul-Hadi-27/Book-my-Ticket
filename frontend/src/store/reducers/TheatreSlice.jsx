import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    theatres:[]
};
const TheatreSlice = createSlice({
  name: "theatres",
  initialState,
  reducers: {
    loadtheatre:(state,action)=>{
        state.theatres=action.payload;
    },
     addtheatre: (state, action) => {
      state.theatres.push(action.payload);
    },
    updatetheatre: (state, action) => {
      const index = state.theatres.findIndex((e) => e.id === action.payload.id);
      if (index == -1) return;
      else {
        state.theatres[index] = action.payload;
      }
    },
    deletetheatre: (state, action) => {
      state.theatres = state.theatres.filter((e) => e.id !== action.payload.id);
    },
  },
});
 export const {loadtheatre,addtheatre,updatetheatre,deletetheatre}=TheatreSlice.actions;
 export default TheatreSlice.reducer;
