import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sports:[]
};
const SportSlice = createSlice({
  name: "sports",
  initialState,
  reducers: {
    loadsports:(state,action)=>{
        state.sports=action.payload;
    },
     addsport: (state, action) => {
      state.sports.push(action.payload);
    },
    updatesport: (state, action) => {
      const index = state.sports.findIndex((e) => e.id === action.payload.id);
      if (index == -1) return;
      else {
        state.sports[index] = action.payload;
      }
    },
    deletesport: (state, action) => {
      state.sports = state.sports.filter((e) => e.id !== action.payload.id);
    },
  },
});
 export const {loadsports,addsport,updatesport,deletesport}=SportSlice.actions;
 export default SportSlice.reducer;
 
