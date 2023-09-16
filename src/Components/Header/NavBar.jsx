import React from 'react'
import "./navbarStyle.css"

export default function NavBar() {
  return (
    <div className='NavBar'>
      <ul className="navBar">
        <li className="navBarItems">Home</li>
        <li className="navBarItems">News</li>
        <li className="navBarItems">contact us</li>
        <button>Sign in / Sign up</button>
      </ul>
    </div>
  )
}
