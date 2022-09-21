import React from 'react'
import './index.css'
import { MdSearch, MdOutlineOndemandVideo } from "react-icons/md";
import { FaHome  } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { SiFacebookgaming } from "react-icons/si";
import { BsFillGrid3X3GapFill, BsMessenger } from "react-icons/bs";

function Navbar() {
  return (
    <div className='navbar'>
      <div className='fb-search'>
        <span className='fb-logo'><img src="https://img.icons8.com/fluency/50/000000/facebook-new.png " alt='facebook-logo' /></span>
        <span className='fb-input'>
          <span className='fb-input-logo'><MdSearch /></span>
          <span className='fb-input-search'></span>
        </span>
      </div>

      <div className='fb-home'>
        <span className="fb-"><FaHome /></span>
        <span className="fb-"><MdOutlineOndemandVideo /></span>
        <span className="fb-"></span>
        <span className="fb-"><HiUserGroup /></span>
        <span className="fb-"><SiFacebookgaming /></span>

      </div>

      <div className='fb-account'>
        <span className="fb-acc"><BsFillGrid3X3GapFill /></span>
        <span className="fb-acc"><BsMessenger /></span>
        {/* <span className="fb-acc"><HiOutlineBellAlert /></span> */}
        <span className="fb-acc"></span>
      </div>

    </div>
  )
}
export default Navbar
