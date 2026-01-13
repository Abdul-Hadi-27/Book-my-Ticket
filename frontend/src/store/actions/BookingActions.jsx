import axios from "../../api/axiosConfig"
import { loadbooking } from "../reducers/BookingSlice"

export const asyncgetbookings=()=>async(dispatch)=>{
try {
    const {data}=await axios.get('/bookings')
    // console.log(data)
    dispatch(loadbooking(data))
} catch (error) {
    console.log(error)
    
}
}