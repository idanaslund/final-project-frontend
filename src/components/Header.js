import React from "react"
import Navbar from "./Navbar"


import { StyledHeader } from '../theme/styles'


const Header = () => {
    return(
        
        <StyledHeader>
            <img src="https://i.postimg.cc/44V76f12/foodie-finder.png" alt="foodie-finder-logotype" height="50px" />

            <Navbar />
        </StyledHeader>
        
    )
}

export default Header
