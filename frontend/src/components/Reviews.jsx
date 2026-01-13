import { useParams } from "react-router-dom";
const Reviews = ({ data, itemId }) => {
  const { title } = useParams();

  return (
    <div>
      {data
        .filter((r) => r.itemId === itemId)
        .map((r) => (
          <div
            key={r.id}
            className=" p-2  flex gap-x-5 gap-y-2  flex-wrap  text-black"
          >
            

            <div className=" mb-2 h-25 flex flex-col  rounded-2xl border ml-5 border-gray-400      w-90">
        
              <div className="flex  justify-between  w-full px-4">
                <div className="flex items-center px-2">
                  <span className="">
                    {" "}
                    <i className="ri-account-circle-2-line  text-2xl"></i>
                  </span>

                  <h1 className="text-xl">
                    <h3 className="text-xl ml-2 "> {r.userName}</h3>
                  </h1>
                </div>

                <p className="text-xl mt-4">⭐{r.rating}/5</p>
              </div>

              <p className="text-lg px-10 mt-2">{r.comment}</p>
            </div>
            
          </div>
        ))}

      {data.filter((r) => r.itemId === itemId).length === 0 && (
        <p className="text-2xl font-bold px-20 mt-2">No reviews yet!</p>
      )}
    </div>
  );
};

export default Reviews;
