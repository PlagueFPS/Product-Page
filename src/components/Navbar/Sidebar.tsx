import './Sidebar.css'
import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

interface Props {
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>,
}

export const Sidebar: FC<Props> = ({ setShowSidebar }) => {
  return (
    <aside className='sidebar'>
      <div className="sidebar-content">
        <button className="closeSidebarButton">
          <FontAwesomeIcon icon={ faTimes } onClick={ () => setShowSidebar(false) } />
        </button>
        <ul className="sidebar-links">
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </aside>
  )
}