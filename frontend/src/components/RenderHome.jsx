import { useNavigate } from 'react-router-dom'

const RenderHome = ({data,title}) => {
  
  const navigate = useNavigate()

  const formatDate = (iso) => {
    if (!iso) return "";
    return new Date(iso).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  return (
    data.map((s) => {
      return (
        <div 
          key={s.id}
          onClick={() => navigate(`/info/${title}/${s.id}`)}
          className='flex w-70 justify-center items-center flex-col'
        >
          
          <div className='relative w-60 h-80 overflow-hidden rounded-xl'>
            <img className='h-full w-full object-center' src={s.poster} />

            {/* ⭐ rating visible fix */}
            {s.rating ? (
              <span className='absolute top-2 right-2 text-sm bg-black/60 text-white px-1 rounded'>
                ⭐{s.rating}
              </span>
            ) : ""}

            <div className='flex justify-between w-full items-center'>
              <p className='absolute bottom-0 py-1 w-full bg-black text-white text-center'>
                {formatDate(s.date || s.releaseDate)}
              </p>
            </div>
          </div>
          
          <div className='flex items-center  mt-2'>
            <span>{s.title}</span>
          </div>
        </div>
      );
    })
  );
};

export default RenderHome;
