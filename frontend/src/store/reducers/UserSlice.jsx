import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: null,
};
const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loaduser: (state, action) => {
      state.users = action.payload;
    },
      removeuser: (state,action)=>{
            state.users=null;
        }
  },
});
 export default UserSlice.reducer;
 export const {loaduser,removeuser}=UserSlice.actions;
