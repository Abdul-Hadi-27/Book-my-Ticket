import { configureStore } from "@reduxjs/toolkit";
import EventSlice from '../store/reducers/EventSlice'
import MovieSlice from '../store/reducers/MovieSlice'
import SportSlice from '../store/reducers/SportSlice'
import TheatreSlice from '../store/reducers/TheatreSlice'
import BookingSlice from '../store/reducers/BookingSlice'
import UserSlice from '../store/reducers/UserSlice'
import UiSlice from '../store/reducers/UiSlice'
export const store=configureStore({
    reducer:{
        eventReducer:EventSlice,
        sportReducer:SportSlice,
        movieReducer:MovieSlice,
        theatreReducer:TheatreSlice,
        bookingReducer:BookingSlice,
        userReducer: UserSlice,

        uiReducer:UiSlice,

    }
})