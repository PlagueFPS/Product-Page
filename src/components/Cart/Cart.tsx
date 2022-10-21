import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import { CartItem } from './CartItem'
import { AiOutlineLeft } from 'react-icons/ai'

export const Cart = () => {
  const { cartItems, setShowCart, totalAmount } = useContext(CartContext)!

  return (
    <div className='cartContainer'>
      <div className="cartContent">
        <button className="cartHeading" onClick={ () => setShowCart(false) }>
          <AiOutlineLeft />
          <span className='cartTitle'>Your Cart</span>
          <span className="cartTotalItems">({ totalAmount } items)</span>
        </button>
        <ul className="cartItemList">
          { cartItems.map(item => <CartItem key={ item._id } cartItem={ item } />) }
        </ul>
      </div>
    </div>
  )
}
