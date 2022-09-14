import React from 'react'

export default function Navbar(props) {
    return (
        <>
            <div className="titleBar">
                <div className='logo'>
                    <div className="fb-logo"><img className='fblogo' src={props.logo} alt="facebook-logo" /></div>
                    <div className="fb-search"><input type="text" name="search" placeholder='Search Facebook' autoComplete='off' /></div>
                </div>
                <div className="home">
                    <div className='navabr'>{props.search}</div>
                </div>
                <div className='profile'>{props.profile}</div>



            </div>
        </>
    )
}
