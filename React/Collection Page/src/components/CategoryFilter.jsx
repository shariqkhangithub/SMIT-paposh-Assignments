import { categoryTitle } from "../data/Category";
import Checkbox from "./Checkbox";

function CategoryFilter({ selectedCategory, onChangeCategory }) {
  return (
    <>
      <div className="text-white rounded-md py-2 px-4 shadow-lg bg-black">
        <h3 className="font-bold">Category filter</h3>
        <div className="mt-3 space-y-2" id="categoryFilter">
          {categoryTitle.map((category, i) => (
            <Checkbox
              text={category}
              key={i}
              id={i}
              checked={selectedCategory.includes(category)}
              onChange={(e) => onChangeCategory(category, e.target.checked)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default CategoryFilter;
