import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { FaPlay, FaUserCircle } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { SiFacebookgaming } from "react-icons/si";
import { BsFillGrid3X3GapFill, BsMessenger } from "react-icons/bs";
import { MdNotificationsActive } from "react-icons/md";


export default function Navbar(props) {
    return (
        <>
            <div className="titleBar">
                <div className='logo'>
                    <div className="fb-logo"><img className='fblogo' src={props.logo} alt="facebook-logo" /></div>
                    <div className="fb-search"><input type="text" name="search" placeholder='Search Facebook' autoComplete='off' /></div>
                </div>
                <div className="tab">
                    <div><AiFillHome /></div>
                    <div><FaPlay /></div>
                    <div><HiUserGroup /></div>
                    <div><SiFacebookgaming /></div>
                </div>
                <div className='profile'>
                    <div><BsFillGrid3X3GapFill /></div>
                    <div><BsMessenger /></div>
                    <div><MdNotificationsActive /></div>
                    <div><FaUserCircle /></div>
                </div>



            </div>
        </>
    )
}
