const Reviews = ({ data, itemId }) => {
  // ensure safe array
  const reviewsArray = Array.isArray(data) ? data : [];

  // filter for current item
  const filtered = reviewsArray.filter((r) => r.itemId === itemId);

  return (
    <div className="mt-5">
      {filtered.map((r) => (
        <div key={r.id} className="p-3 flex gap-5 flex-wrap text-black">
          <div className="mb-3 h-auto flex flex-col rounded-2xl border border-gray-400 w-[400px]">
            <div className="flex justify-between w-full px-4 py-2">
              <div className="flex items-center gap-2">
                <i className="ri-account-circle-2-line text-2xl"></i>
                <h3 className="text-lg font-semibold">{r.userName}</h3>
              </div>
              <p className="text-lg font-medium">⭐{r.rating}/5</p>
            </div>
            <p className="text-md px-4 pb-3 text-gray-700">{r.comment}</p>
          </div>
        </div>
      ))}

      {filtered.length === 0 && (
        <p className="text-xl font-semibold text-gray-700 mt-4 px-3">
          No reviews yet!
        </p>
      )}
    </div>
  );
};

export default Reviews;
