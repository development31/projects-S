import React from 'react'
import './MarketPlace.scss'
import { Link } from 'react-router-dom'

import one from './img/one.mp4'
// import two from './img/two.png'

// import three from './img/three.png'
// import four from './img/four.png'
// import five from './img/five.png'
// import six from './img/six.png'

// import seven from './img/seven.png'
// import eight from './img/eight.png'
// import nine from './img/nine.png'
// import ten from './img/ten.png'

function MarketPlace() {
  return (
    <>
      <div>
        <div className='marketplace-navbar'>
          <div className="navbar">
            <div className="navbar-left">
              <Link to='/login'><button className="login-btn">Log In</button></Link>
              <Link to='/signup'><button className="signup-btn">Sign Up</button></Link>
            </div>
            <div className="navbar-center">
              <h1 className="title">Style Capsule</h1>
            </div>
            <div className="navbar-right">
              <i class="fa-regular fa-bell"></i>
              <i class="fa-solid fa-magnifying-glass"></i>
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>

        <div className='marketplace1'>
          <div className='vid'>
            <video src={one} alt="Video" autoPlay loop muted />
          </div>

          {/* <div className='capsule'> */}
          <div className='closet'>
            <div className="marquee">
              <p>REVOLUTIONIZE YOUR CLOSET</p>
              <p>REVOLUTIONIZE YOUR CLOSET</p>
              <p>REVOLUTIONIZE YOUR CLOSET</p>
              <p>REVOLUTIONIZE YOUR CLOSET</p>
            </div>
          </div>
          {/* </div> */}


        </div>
      </div>
    </>
  )
}

export default MarketPlace
