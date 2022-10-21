import './ProductDesc.css'
import { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../contexts/CartContext'

export const ProductDesc = () => {
  const { addItemToCart, product } = useContext(CartContext)!

  const [amount, setAmount] = useState<number>(1)

  const handleDecrement = () => {
    if (amount <= 1) {
      setAmount(1)
    }
    else {
      setAmount(prevState => prevState - 1)
    }
  }

  return (
    <section className="productDesc-Container">
      <span className="companyName">Sneaker Company</span>
      <h2 className="productTitle">Fall Limited Edition Sneakers</h2>
      <p className="productDesc">
        These low-profile sneakers are your perfect casual wear companion. 
        Featuring a durable rubber outer sole,
        they'll withstand everything the weather can offer.
      </p>
      <div className="productPrice-Container">
        <span className="productPrice">$125.00</span>
        <span className="productPriceDiscount">50%</span>
        <span className="productOldPrice">$250.00</span>
      </div>
      <div className="productAmountToCart-Container">
        <div className="productAmount-Container">
          <button className="decrementButton" onClick={ handleDecrement }>
            <FontAwesomeIcon icon={ faMinus } />
          </button>
          <span className="productAmount">{ amount }</span>
          <button className="incrementButton" onClick={ () => setAmount(prevState => prevState + 1) }>
            <FontAwesomeIcon icon={ faPlus } /> 
          </button>
        </div>
        <button onClick={ () => addItemToCart(product, amount) } className="addToCartButton">
          <FontAwesomeIcon icon={ faCartShopping } />
          <span className="addToCart">Add to cart</span>
        </button>
      </div>
    </section>
  )
}