import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookings: [],
};
const BookingSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    loadbooking: (state, action) => {
      state.bookings = action.payload;
    },
    addbooking: (state, action) => {
      state.bookings.push(action.payload);
    },
    updatebooking: (state, action) => {
      const index = state.bookings.findIndex((e) => e.id === action.payload.id);
      if (index == -1) return;
      else {
        state.bookings[index] = action.payload;
      }
    },
    deletebooking: (state, action) => {
      state.bookings = state.bookings.filter((e) => e.id !== action.payload.id);
    },
  },
});
export const { loadbooking,addbooking,updatebooking,deletebooking } = BookingSlice.actions;
export default BookingSlice.reducer;
