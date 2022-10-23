import './CartItem.css'
import { FC, useContext, useState } from 'react'
import { BuyableProduct } from '../../interfaces/BuyableProduct'
import { CartContext } from '../contexts/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

interface Props {
  cartItem: BuyableProduct
}

export const CartItem: FC<Props> = ({ cartItem }) => {
  const { cartItems, setCartItems, setTotalAmount, setTotalPrice } = useContext(CartContext)!

  const [itemAmount, setItemAmount] = useState<number>(cartItem.amount ?? 1)

  const handleRemoveItem = (cartItem: BuyableProduct) => {
    const newItems = cartItems.filter(i => i._id !== cartItem._id)
    
    setCartItems(newItems)
    setTotalAmount(0)
    setTotalPrice(prevState => prevState - cartItem.price)
  }

  const handleIncrement = () => {
    setItemAmount(prevState => prevState + 1)
    setTotalAmount(prevState => prevState + 1)
    setTotalPrice(prevState => prevState + cartItem.price)
  }

  const handleDecrement = () => {
    setItemAmount(prevState => {
      if (prevState <= 1) return 1

      return prevState - 1
    })

    setTotalAmount(prevState => {
      if (prevState <= 1) return 1
      
      return prevState - 1
    })
    setTotalPrice(prevState => {
      if (prevState <= cartItem.price) return cartItem.price

      return prevState - cartItem.price
    })
  }

  return (
    <li className="cartItem">
      <picture className="cartItemImageContainer">
        <img 
          src={ cartItem.img } 
          alt={ cartItem.name } 
          className="cartItemImage" 
          />
      </picture>
      <div className="cartItemNameContainer">
        <span className="cartItemName">{ cartItem.name }</span>
        <span className="cartItemPrice">${ cartItem.price }.00 x { itemAmount }</span>
      </div>
      <div className="cartItemAmountContainer">
        <button className='cartItemDecrementButton' onClick={ handleDecrement }>
          <FontAwesomeIcon icon={ faMinus } />
        </button>
        <span className="cartItemAmount">{ itemAmount }</span>
        <button onClick={ handleIncrement } className="cartItemIncrementButton">
          <FontAwesomeIcon icon={ faPlus } />
        </button>
      </div>
      <div className="cartItemButtonContainer">
        <button onClick={ () => handleRemoveItem(cartItem) } className='cartItemRemoveButton'>
          <FontAwesomeIcon icon={ faTrash } />
        </button>
      </div>
    </li>
  )
}
