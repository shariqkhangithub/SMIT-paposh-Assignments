function ProductCard({ product }) {

  return (
    <div className="col-span-3">
      <div className="rounded-xl shadow-xl">
        <div className="flex flex-col">
          <img src={product.image} alt={product.title} />
          <div className="relative p-3 space-y-2 h-56 text-black bg-neutral-50">
            <h1 className="text-[18px] font-bold text-shadow-md">{product.title}</h1>
            <div className="flex items-center gap-2 font-semibold">
              <div className="flex justify-start">
                {[1, 2, 3, 4, 5].map((m, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className={
                      i < product.rating
                        ? "size-6 text-yellow-400"
                        : "size-6 text-gray-300"
                    }
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                ))}
              </div>
              ({product.rating})
            </div>

            <p className="max-h-24 overflow-hidden font-medium ">
              {product.description}
            </p>
            <div className="absolute bottom-2 w-full flex justify-between items-center pr-6">
              <span className="text-black text-xl font-bold">${product.price}</span>
              <button className="cursor-pointer transition-all duration-1000 ease-in-out">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
