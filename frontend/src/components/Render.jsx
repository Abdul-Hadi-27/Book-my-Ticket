import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Render = ({data,title}) => {
  
    const navigate=useNavigate()
    // const{title,category,genre,language,rating,releaseDate}=useSelector((state)=>state.movieReducer.movies)
// const handleOpen=(id)=>{
//     navigate(`/info/${id}}`)
    
// }
const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
};

  return (
    data.map((s)=>{
    return<div key={s.id}  onClick={() => navigate(`/info/${title}/${s.id}`)}
    className='  flex      p-5 justify-center items-center  flex-col  '>
      <div className='relative overflow-hidden py-3 rounded-xl' >
        <img className=' w-80 object-cover overflow-hidden rounded-xl h-124' src={s.poster} />
        <p className='absolute bottom-0 py-2 w-full  bg-black text-white
          text-center '>{formatDate(s.date || s.releaseDate)}
</p>
      </div>
      {}
        <div className='flex items-start px-5 w-full flex-col'>
            <h2 className='text-xl font-semibold tracking-wider  w-full mb-2'>{s.title}</h2>
        <h2 className='text-lg '>{s.venue}</h2>
       
        <div className='flex  justify-between w-full'>
            <h2 className='text-lg '>{s.category}</h2>
           
        <h2 className='text-md'>{s.genre}</h2>
        </div>
        <div className='flex justify-between w-full'>
            <h2 className='text-md'> {s.language}</h2>
        {/* <h2 className='text-md'>{s.duration}</h2> */}
        <h2 className='text-md'>{s.rating}</h2>
        </div>
        </div>
    </div>
   })
  )
}

export default Render