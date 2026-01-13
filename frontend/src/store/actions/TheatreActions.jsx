 import axios from '../../api/axiosConfig'
import { loadtheatre } from '../reducers/TheatreSlice'

  
 export const asyncgettheatre=()=>async(dispatch)=>{
try {
    
    const {data}=await axios.get('/theaters')
   dispatch(loadtheatre(data))

    // console.log(data)
    
} catch (error) {
    console.log(error)
    
}
 }



export const asyncUpdateTheatre=(data)=>async(dispatch)=>{
try {
    
    const {data}=await axios.post('/theaters' ,data)
   dispatch(loadtheatre(data))

    // console.log(data)
    
} catch (error) {
    console.log(error)
    
}
 }



// export const asyncCreateOrUpdateTheatre =
//   (theatreData, movieId) => async (dispatch) => {
//     try {
//       // 1️⃣ Get all theatres
//       const { data: theatres } = await axios.get("/theaters");

//       // 2️⃣ Find theatre by name
//       let theatre = theatres.find(
//         (t) => t.name.toLowerCase() === theatreData.name.toLowerCase()
//       );

//       // 3️⃣ Create theatre if not exists
//       if (!theatre) {
//         const { data: newTheatre } = await axios.post("/theaters", {
//           name: theatreData.name,
//           location: theatreData.location,
//           logo: "",
//           screens: [],
//         });
//         theatre = newTheatre;
//       }

//       // 4️⃣ New screen
//       const newScreen = {
//         screenId: Date.now(),
//         movieId,
//         category: theatreData.screen.category,
//         price: Number(theatreData.screen.price),
//         showTimes: theatreData.screen.showTimes
//           .split(",")
//           .map((t) => t.trim()),
//         availableSeats: Number(theatreData.screen.availableSeats),
//       };

//       // 5️⃣ Update theatre
//       const updatedTheatre = {
//         ...theatre,
//         screens: [...theatre.screens, newScreen],
//       };

//       await axios.put(`/theaters/${theatre.id}`, updatedTheatre);

//       // 6️⃣ Reload theatres
//       const { data } = await axios.get("/theaters");
//       dispatch(loadtheatre(data));
//       return updatedTheatre;
//     } catch (error) {
//       console.log(error);
//     }
//   };