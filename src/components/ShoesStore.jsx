import { useState } from "react"
import ProductList from "./ProductList"
import Modal from "./Modal"
import productsData from "../data/data.json"

export default function ShoesStore() {
  const [productDetail, setProductDetail] = useState(null)

  const setStateModal = (product) => {
    setProductDetail(product)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Shoes Store</h1>
        <p className="text-gray-600">Discover the latest collection of premium shoes</p>
      </div>

      <ProductList productsData={productsData} setStateModal={setStateModal} />

      <Modal content={productDetail} onClose={() => setStateModal(null)} />
    </div>
  )
}
