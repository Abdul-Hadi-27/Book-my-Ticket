 import axios from '../../api/axiosConfig'
import { loadevents } from '../reducers/EventSlice'

  
 export const asyncgetevents=()=>async(dispatch)=>{
try {
    
    const {data}=await axios.get('./events')
   dispatch(loadevents(data))

    // console.log(data)
    
} catch (error) {
    console.log(error)
    
}
 }
 