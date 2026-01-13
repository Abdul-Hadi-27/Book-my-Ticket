import axios from 'axios'
import { useSelector } from 'react-redux'
import Render from '../components/Render'
const Events = () => {
  const event=useSelector((state)=>state.eventReducer.events)
  // console.log(event)

  return (
    <div className='flex flex-wrap    justify-center gap-2     '>
    <Render data={event} title="events"/>
    </div>

  )
}

export default Events