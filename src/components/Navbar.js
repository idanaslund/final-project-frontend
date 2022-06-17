import React from "react"
import { Link, useNavigate } from 'react-router-dom'
import { stack as Menu } from 'react-burger-menu'
import { Burger } from "theme/styles"

const Navbar = () => {

    const navigate = useNavigate()

    return(
        <Burger>
            <Menu pageWrapId={ "page-wrap" }>
                <ul id="page-wrap">
                    <li><Link id="home" class-name="bm-item" to='/restaurants'>Home</Link></li>
                    <li><Link id="profile" class-name="bm-item" to='/profile'>Profile</Link></li>
                    <li><Link id="about" class-name="bm-item" to='/about'>About</Link></li>
                </ul>

                <button
                    type="button" onClick={() => navigate('/logout')}>
                    Log out
                </button>
            </Menu>
        </Burger>
        
    )
}

export default Navbar