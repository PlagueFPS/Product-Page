import './Product.css'
import { ProductDesc } from "./ProductDesc"
import { ProductImage } from "./ProductImage"

export const Product = () => {
  return (
    <main className="productDetails-Container">
      <ProductImage />
      <ProductDesc />
    </main>
  )
}