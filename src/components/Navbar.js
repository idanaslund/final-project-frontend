import React from "react"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <div>
            <ul>
                <li><Link to='/restaurants'>Home</Link></li>
                {/* <li><Link to='/profile'>Profile</Link></li> */}
                <li><Link to='/about'>About</Link></li>
            </ul>
        </div>
        
    )
}

export default Navbar