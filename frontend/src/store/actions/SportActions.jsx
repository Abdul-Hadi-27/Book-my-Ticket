 import axios from '../../api/axiosConfig'
import { loadsports } from '../reducers/SportSlice'
  
 export const asyncgetsports=()=>async(dispatch)=>{
try {
    
    const {data}=await axios.get('./sports')
   dispatch(loadsports(data))

    // console.log(data)
    
} catch (error) {
    console.log(error)
    
}
 }
 