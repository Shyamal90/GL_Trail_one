import React from 'react'
import {Link} from 'react-router-dom'
import './Header.scss'

function Header() {
  return (
    <div className='header'>
      <Link to="/">
        <div className="logo">
          <h1>MovieApp</h1>
        </div>
      </Link>

      <div className="user-image">
        <img src={"https://avatars.githubusercontent.com/u/88072892?v=4"} alt="user" width="5%" />
      </div>
    </div>
  )
}

export default Header
