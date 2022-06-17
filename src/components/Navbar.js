import React from "react"
import { Link } from 'react-router-dom'
import { stack as Menu } from 'react-burger-menu'
import { Burger } from "theme/styles"

const Navbar = () => {
    return(
        <Burger>
            <Menu pageWrapId={ "page-wrap" }>
                <ul id="page-wrap">
                <li><Link id="home" class-name="bm-item" to='/restaurants'>Home</Link></li>
                <li><Link id="profile" class-name="bm-item" to='/profile'>Profile</Link></li>
                <li><Link id="about" class-name="bm-item" to='/about'>About</Link></li>
                </ul>
            </Menu>
        </Burger>
        
    )
}

export default Navbar