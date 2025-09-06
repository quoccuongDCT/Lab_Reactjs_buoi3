import ProductItem from "./ProductItem"

export default function ProductList({ productsData, setStateModal }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {productsData.map((product) => (
        <ProductItem key={product.id} item={product} setStateModal={setStateModal} />
      ))}
    </div>
  )
}
