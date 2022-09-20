import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='fb-search'>
        <span className='fb-logo'><img src="https://img.icons8.com/fluency/50/000000/facebook-new.png " alt='facebook-logo' /></span>
        <span className='fb-input'>
          <span className='fb-input-logo'></span>
          <span className='fb-input-search'></span>
        </span>
      </div>

      <div className='fb-home'>
        <span className="fb-"></span>
        <span className="fb-"></span>
        <span className="fb-"></span>
        <span className="fb-"></span>
        <span className="fb-"></span>

      </div>

      <div className='fb-account'>
        <span className="fb-acc"></span>
        <span className="fb-acc"></span>
        <span className="fb-acc"></span>
        <span className="fb-acc"></span>
      </div>

    </div>
  )
}
export default Navbar
