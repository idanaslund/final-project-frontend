import React, { useState } from "react"
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import { Burger } from "theme/styles"

const Navbar = () => {

    // const navigate = useNavigate()

    const [isOpen, setOpen] = useState(false)

    const handleIsOpen = () => {
        setOpen(!isOpen) 
    }

    const closeSideBar = () => {
        setOpen(false)
    }

    return(
        <Burger>
            <Menu pageWrapId={ "page-wrap" } 
                isOpen={isOpen}
                onOpen={handleIsOpen}
                onClose={handleIsOpen}
            >
                <div id="page-wrap">
                    <div className='page-wrap' >

                        <Link id="home" class-name="bm-item" to='/restaurants' onClick={closeSideBar}>Find restaurant</Link>
                        <Link id="profile" class-name="bm-item" to='/profile' onClick={closeSideBar}>Your profile</Link>
                        <Link id="about" class-name="bm-item" to='/about' onClick={closeSideBar}>About</Link>
                        <Link id="logout" class-name="bm-item" to='/logout' onClick={closeSideBar}>Log out</Link>
                    </div>
                </div>

            </Menu>
        </Burger>
        
    )
}

export default Navbar