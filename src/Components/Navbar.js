import React from 'react'

export default function Navbar(props) {
    return (
        <>
            <div className="titleBar">
                <div>
                    <div className='logo'>
                        <div className="fb-logo"><img className='fblogo' src={props.logo} alt="facebook-logo" /></div>
                        <div className="fb-search"><input type="text" name="search" placeholder='Search Facebook' /></div>
                    </div>

                    <div className='navabr'>{props.search}</div>
                    <div className='profile'>{props.profile}</div>
                </div>



            </div>
        </>
    )
}
