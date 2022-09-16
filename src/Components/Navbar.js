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
                    <div className='home'><AiFillHome /></div>
                    <div className='home'><FaPlay /></div>
                    <div className='home'><HiUserGroup /></div>
                    <div className='home'><SiFacebookgaming /></div>
                </div>
                <div className='profile'>
                    <div className="profile1"><BsFillGrid3X3GapFill /></div>
                    <div className="profile1"><BsMessenger /></div>
                    <div className="profile1"><MdNotificationsActive /></div>
                    <div className="profile1"><FaUserCircle /></div>

                </div>



            </div>
        </>
    )
}
