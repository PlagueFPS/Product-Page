import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

export const NavBar = () => {
  const { setShowCart } = useContext(CartContext)!

  return (
    <nav>
      <button className="sidebarToggleButton">
        <FontAwesomeIcon icon={ faBars } />
      </button>
      <h1 className="site-title">Sneakers</h1>
      <ul className="nav-links">
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="cartAvatar-Container">
        <picture className="cartIconContainer" title='Cart' onClick={ () => setShowCart(true) }>
          <FontAwesomeIcon icon={ faCartShopping } />
        </picture>
        <picture className="avatarContainer">
          <img 
            src="/images/image-avatar.png" 
            alt="Avatar" 
            className="avatar"
            title="Avatar"
            aria-label="Avatar"
            />
        </picture>
      </div>
    </nav>
  )
}