import './NavBar.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import { Sidebar } from './Sidebar'

export const NavBar = () => {
  const { setShowCart } = useContext(CartContext)!
  const [showSidebar, setShowSidebar] = useState<boolean>(false)

  return (
    <>
      <nav>
        <button className="sidebarToggleButton" onClick={ () => setShowSidebar(true)}>
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
      { showSidebar && <Sidebar setShowSidebar={ setShowSidebar } /> }
    </>
  )
}