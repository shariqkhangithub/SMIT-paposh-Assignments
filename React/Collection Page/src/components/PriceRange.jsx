import React, { useState } from "react";

function PriceRange({rangeValue, onChangePrice}) {
    
  return (
    <div className="text-black rounded-md py-2 px-4 shadow-lg">
      <h3 className="font-bold">Price Filter</h3>
      <div className="mt-3 space-y-2" id="priceFilter">
        <input type="range" max={"1200"} min={"100"} value={rangeValue} onChange={(e)=> onChangePrice(e.target.value)} className="w-full" />
        <div className="flex justify-between items-center">
            <p>100</p>
            <p>{rangeValue}</p>
        </div>
      </div>
    </div>
  );
}

export default PriceRange;
