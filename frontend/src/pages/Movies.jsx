import React from 'react'
import { useSelector } from 'react-redux'
import Render from '../components/Render'

const Movies = () => {
  const movie=useSelector((state)=>state.movieReducer.movies)
  // console.log(movie)

  return (
    <div className='flex flex-wrap    justify-center gap-2     '>
    <Render data={movie} title="movies"/>
    </div>

  )
}

export default Movies