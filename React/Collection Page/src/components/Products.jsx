import ProductCard from "./ProductCard"


function Products({products}) {
  return (
    <>
    <div className="grid grid-cols-12 gap-2" id="products">
        
    {products.map((product)=>(
        <ProductCard key={product.id} product={product}/>
    ))}
    </div>
    </>
  )
}

export default Products