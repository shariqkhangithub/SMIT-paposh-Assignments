const productsData = [
  {
    name: "Cheese Pizza",
    category: "Pizza",
    price: 799,
    rating: 4.5,
    image: "https://via.placeholder.com/150?text=Pizza",
  },
  {
    name: "Chicken Burger",
    category: "Burger",
    price: 499,
    rating: 4.2,
    image: "https://via.placeholder.com/150?text=Burger",
  },
  {
    name: "Spicy Shawarma",
    category: "Shawarma",
    price: 399,
    rating: 4.0,
    image: "https://via.placeholder.com/150?text=Shawarma",
  },
  {
    name: "Crispy Broast",
    category: "Broast",
    price: 699,
    rating: 4.3,
    image: "https://via.placeholder.com/150?text=Broast",
  },
  {
    name: "Pizza Margherita",
    category: "Pizza",
    price: 750,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1601924579400-c2f261caeaba",
  },
  {
    name: "Cheeseburger",
    category: "Burger",
    price: 550,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
  },
  {
    name: "BBQ Pizza",
    category: "Pizza",
    price: 899,
    rating: 4.7,
    image: "https://via.placeholder.com/150?text=Pizza",
  },
];

let selectedCategories = [];
let selectedRatings = [];
let selectedPrices = [];

const productsContainer = document.getElementById("products");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");
const ratingFilter = document.getElementById("ratingFilter");
const sortSelect = document.getElementById("sortOptions");
const filterButtonsContainer = document.getElementById("filterButtons");

function displayProducts(products) {
  productsContainer.innerHTML = "";

  products.forEach((product) => {
    const div = document.createElement("div");
    div.className = "bg-white p-4 rounded shadow";

    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="w-full h-40 object-cover mb-2 rounded">
      <h3 class="font-bold text-lg">${product.name}</h3>
      <p class="text-sm text-gray-600">${product.category}</p>
      <p class="font-semibold">PKR ${product.price}</p>
      <p class="text-yellow-500">★ ${product.rating}</p>
    `;
    productsContainer.appendChild(div);
  });
}

function createCategoryFilters() {
  const categories = [...new Set(productsData.map((p) => p.category))];

  categories.forEach((cat) => {
    const label = document.createElement("label");
    label.className = "flex items-center space-x-2";

    label.innerHTML = `
      <input type="checkbox" value="${cat}" class="category-checkbox">
      <span>${cat}</span>
    `;
    categoryFilter.appendChild(label);
  });
}

function createPriceFilters() {
  const priceRanges = [
    { label: "Below 500", min: 0, max: 499 },
    { label: "500 - 799", min: 500, max: 799 },
    { label: "800 & Above", min: 800, max: Infinity },
  ];

  priceRanges.forEach((range) => {
    const label = document.createElement("label");
    label.className = "flex items-center space-x-2";

    label.innerHTML = `
      <input type="checkbox" class="price-checkbox" data-min="${range.min}" data-max="${range.max}">
      <span>${range.label}</span>
    `;
    priceFilter.appendChild(label);
  });
}

function createRatingFilters() {
  const ratings = [4.0, 4.5, 5.0];

  ratings.forEach((rating) => {
    const label = document.createElement("label");
    label.className = "flex items-center space-x-2";

    label.innerHTML = `
      <input type="checkbox" class="rating-checkbox" value="${rating}">
      <span>${rating} & Up</span>
    `;
    ratingFilter.appendChild(label);
  });
}

function updateActiveFiltersUI() {
  filterButtonsContainer.innerHTML = "";

  [...selectedCategories, ...selectedPrices, ...selectedRatings].forEach((filter) => {
    const btn = document.createElement("button");
    btn.className = "px-3 py-1 bg-red-200 text-red-800 rounded text-sm font-medium";
    btn.innerText = `${filter} ✕`;
    btn.addEventListener("click", () => {
      removeFilter(filter);
    });
    filterButtonsContainer.appendChild(btn);
  });
}

function removeFilter(filter) {
  selectedCategories = selectedCategories.filter((c) => c !== filter);
  selectedPrices = selectedPrices.filter((p) => p !== filter);
  selectedRatings = selectedRatings.filter((r) => r !== filter);
  applyFilters();
}

function applyFilters() {
  let filtered = [...productsData];

  if (selectedCategories.length > 0) {
    filtered = filtered.filter((p) => selectedCategories.includes(p.category));
  }

  if (selectedPrices.length > 0) {
    filtered = filtered.filter((p) =>
      selectedPrices.some((range) => {
        const [min, max] = range.split("-").map(Number);
        return p.price >= min && p.price <= max;
      })
    );
  }

  if (selectedRatings.length > 0) {
    filtered = filtered.filter((p) =>
      selectedRatings.some((r) => p.rating >= parseFloat(r))
    );
  }

  // Sorting
  const sortValue = sortSelect.value;
  if (sortValue === "price-l-h") filtered.sort((a, b) => a.price - b.price);
  else if (sortValue === "price-h-l") filtered.sort((a, b) => b.price - a.price);
  else if (sortValue === "rating-h-l") filtered.sort((a, b) => b.rating - a.rating);
  else if (sortValue === "rating-l-h") filtered.sort((a, b) => a.rating - b.rating);

  displayProducts(filtered);
  updateActiveFiltersUI();
}

function addEventListeners() {
  document.querySelectorAll(".category-checkbox").forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      if (this.checked) selectedCategories.push(this.value);
      else selectedCategories = selectedCategories.filter((c) => c !== this.value);
      applyFilters();
    });
  });

  document.querySelectorAll(".price-checkbox").forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const min = this.dataset.min;
      const max = this.dataset.max;
      const label = `${min}-${max}`;
      if (this.checked) selectedPrices.push(label);
      else selectedPrices = selectedPrices.filter((p) => p !== label);
      applyFilters();
    });
  });

  document.querySelectorAll(".rating-checkbox").forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      if (this.checked) selectedRatings.push(this.value);
      else selectedRatings = selectedRatings.filter((r) => r !== this.value);
      applyFilters();
    });
  });

  sortSelect.addEventListener("change", applyFilters);
}

createCategoryFilters();
createPriceFilters();
createRatingFilters();
displayProducts(productsData);
addEventListeners();
