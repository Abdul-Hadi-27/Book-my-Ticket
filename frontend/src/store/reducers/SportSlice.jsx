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
  const item = action.payload;
  const index = state.sports.findIndex(e => e.id === item.id);
  if (index !== -1) state.sports[index] = {...state.sports[index], ...item};
}
,
    deletesport: (state, action) => {
      state.sports = state.sports.filter((e) => e.id !== action.payload);
    },
  },
});
 export const {loadsports,addsport,updatesport,deletesport}=SportSlice.actions;
 export default SportSlice.reducer;
 
