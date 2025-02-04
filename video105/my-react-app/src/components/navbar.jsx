import React from 'react'
import Footer from './footer'

const Navbar = (props) => {
  return (
    <div>
      <div className="logo">{props.text}</div> {/* importing props here the value given from where the components called */}
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Join</li>
      </ul>

      <Footer/>
    </div>
   
  )
}

export default Navbar
