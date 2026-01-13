import React from 'react'
import {useSelector} from 'react-redux'
import Render from '../components/Render'
const Sports = () => {
   const sport= useSelector((state)=>state.sportReducer.sports)
  //  console.log(sport)
   
  return (
    <div className='flex flex-wrap    justify-center gap-2     '>
    <Render data={sport} title="sports"/>
    </div>
  )
}

export default Sports