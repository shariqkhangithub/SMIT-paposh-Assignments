import { products } from "./products";

export function visibleProducts(
  selectedCategories,
  selectedRating,
  rangeValue
) {
  let visibleProducts = products;

  if (selectedCategories.length > 0) {
    visibleProducts = visibleProducts.filter((product) =>
      selectedCategories.includes(product.category)
    );
  }
  if (selectedRating) {
    visibleProducts = visibleProducts.filter(
      (product) => product.rating >= selectedRating
    );
  }
  if (rangeValue) {
    visibleProducts = visibleProducts.filter(
      (product) => product.price <= rangeValue
    );
  }

  return visibleProducts;
  // return visibleProducts;
}
