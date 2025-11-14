import React from "react";
import Rating from "./Rating";

function RatingFilter({selectedRating , onChangeRating}) {

 
  return (
    <div className="h-48 p-5 space-y-2 border border-gray-200 shadow-lg rounded-md">
      {[5, 4, 3, 2, 1].map((rating) => (
        <div
          key={rating}
          onClick={()=>onChangeRating(rating)}
          className="flex items-center gap-2 hover:opacity-80 cursor-pointer "
        >
          <Rating ratingValue={rating}  isSelected={rating === selectedRating} />
          <p className="text-gray-400">
            {rating === 5 ? "5.0" : rating.toFixed(1) + " +"}
          </p>
        </div>
      ))}
    </div>
  );
}

export default RatingFilter;
