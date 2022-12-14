import React from 'react'
import { Link } from "react-router-dom"

const Navigation = () => {
  return (
      <nav className='nav-bar'>
        <ul>
          <li><Link to="/chineseSuperLeague">Chinese Super League</Link></li>
          {/* <li><Link to="/books">Books</Link></li> */}
        </ul>
      </nav>
  )
}

export default Navigation