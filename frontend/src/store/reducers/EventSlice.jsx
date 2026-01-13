import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [],
};
const EventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    loadevents: (state, action) => {
      state.events = action.payload;
    },
    addevent: (state, action) => {
      state.events.push(action.payload);
    },
    updateevent: (state, action) => {
      const index = state.events.findIndex((e) => e.id === action.payload.id);
      if (index == -1) return;
      else {
        state.events[index] = action.payload;
      }
    },
    deleteevent: (state, action) => {
      state.events = state.events.filter((e) => e.id !== action.payload.id);
    },
  },
});
export const { loadevents,addevent,updateevent,deleteevent } = EventSlice.actions;
export default EventSlice.reducer;
