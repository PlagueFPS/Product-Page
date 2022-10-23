import './App.css';
import { useEffect, useState } from 'react'
import { NavBar } from './components/Navbar/NavBar';
import { Product } from './components/Product/Product';
import { BuyableProduct } from './interfaces/BuyableProduct';
import { CartContext } from './components/contexts/CartContext';
import { CartContextInterface } from './interfaces/CartContextInterface';
import { Cart } from './components/Cart/Cart';

const product: BuyableProduct = {
  _id: 'falllimitededitionsneakers',
  name: 'Fall Limited Edition Sneakers',
  img: '/images/image-product-1.jpg',
  price: 125.00,
  discount: .50,
  amount: 1
}

const App = () => {
  const [showCart, setShowCart] = useState<boolean>(false)
  const [cartItems, setCartItems] = useState<BuyableProduct[]>(JSON.parse(localStorage.getItem('cartItems')!) ?? [])
  const [totalAmount, setTotalAmount] = useState<number>(JSON.parse(localStorage.getItem('totalAmount')!) ?? 0)
  const [totalPrice, setTotalPrice] = useState<number>(0)

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])

    useEffect(() => {
      localStorage.setItem('totalAmount', JSON.stringify(totalAmount))
    }, [totalAmount])

    const addItemToCart = (item: BuyableProduct, amount?: number) => {
      const filteredList = cartItems.filter(i => i._id !== item._id)
      const newList = [...filteredList, item]

      if (amount) {
        const currentItem = newList.find(i => i._id === item._id)
        if (currentItem) {
          currentItem.amount = amount

          setTotalAmount(prevState => prevState = amount)
          setTotalPrice(prevState => {
            if (prevState === 0) {
             return prevState + 1 * item.price
            } else return prevState * item.price
          })
        }
      }

      setCartItems(newList)
    }

    const cartContextValues: CartContextInterface = {
      showCart,
      cartItems,
      setShowCart,
      setCartItems,
      product,
      addItemToCart,
      totalAmount,
      setTotalAmount,
      totalPrice, 
      setTotalPrice,
    }

  return (
    <div className="App">
      <CartContext.Provider value={ cartContextValues }>
        <NavBar />
        <Product />
        { showCart && <Cart /> }
      </CartContext.Provider>
    </div>
  );
}

export default App;
