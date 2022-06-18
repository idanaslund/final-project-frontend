import React from "react"
import { Link, useNavigate } from 'react-router-dom'
import { stack as Menu } from 'react-burger-menu'
import { Burger } from "theme/styles"

const Navbar = () => {

    const navigate = useNavigate()

    return(
        <Burger>
            <Menu pageWrapId={ "page-wrap" }>
                <div id="page-wrap">
                    <div className='page-wrap' >
                        <Link id="home" class-name="bm-item" to='/restaurants'>Home</Link>
                        <Link id="profile" class-name="bm-item" to='/profile'>Profile</Link>
                        <Link id="reviews" class-name="bm-item" to='/reviews'>Reviews</Link>
                        <Link id="about" class-name="bm-item" to='/about'>About</Link>
                        <Link id="logout" class-name="bm-item" to='/logout'>Log out</Link>
                    </div>
                </div>

                {/* <button
                    type="button" onClick={() => navigate('/logout')}>
                    Log out
                </button> */}
            </Menu>
        </Burger>
        
    )
}

export default Navbar