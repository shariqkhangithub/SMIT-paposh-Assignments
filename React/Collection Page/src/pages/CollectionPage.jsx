import CategoryFilter from "../components/CategoryFilter";
import PriceRange from "../components/PriceRange";
import Products from "../components/Products";
import RatingFilter from "../components/RatingFilter";
import { visibleProducts } from "../data/Filters";
import { useState } from "react";

function CollectionPage() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRating, setSelectedRating] = useState("");
  const [rangeValue, setRangeValue] = useState("25");

  function onChangeCategoryHandler(category, checked) {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    }
  }

  function onChangeRatingHandler(rating) {
    if (rating) {
      return setSelectedRating(rating);
    }
  }
  function onChangepriceHandler(value) {
    setRangeValue(value);
  }
  // console.log(visibleProducts());

  return (
    <>
    <div className="bg-zinc-800">
      <h1 className="text-4xl text-center font-bold text-orange-500 text-shadow-lg  m-4">
        Food Collection Page
      </h1>
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-2 space-y-2 p-3 bg-zinc-800 border-2 border-black {
          
        }">
          <CategoryFilter
            selectedCategory={selectedCategories}
            onChangeCategory={onChangeCategoryHandler}
          />
          <PriceRange
            rangeValue={rangeValue}
            onChangePrice={onChangepriceHandler}
          />
          <RatingFilter
            selectedRating={selectedRating}
            onChangeRating={onChangeRatingHandler}
          />
          {selectedRating ? (
            <button
              onClick={()=>setSelectedRating("")}
              className="mt-2 w-full text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-md py-1 transition-colors duration-150 cursor-pointer"
            >
              Clear Rating
            </button>
          ) : (
            ""
          )}
        </div>
        <div className="col-span-10">
          <div className="w-full h-0.5 bg-black mb-3"></div>
          <Products
            products={visibleProducts(
              selectedCategories,
              selectedRating,
              rangeValue
            )}
          />
        </div>
      </div>
      </div>
    </>
  );
}

export default CollectionPage;
