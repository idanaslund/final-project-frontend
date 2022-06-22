import React from "react"
import { Link } from 'react-router-dom'
import { TopNav } from '../theme/styles'

const TopNavBar = () => {
    return(
    <TopNav>
        <Link id="home" to='/restaurants'>FIND RESTAURANT</Link>
        <Link id="profile" to='/profile'>YOUR PROFILE</Link>
        <Link id="reviews" to='/reviews'>REVIEWS</Link>
        <Link id="about" to='/about'>ABOUT</Link>
        <Link id="logout" to='/logout'>LOG OUT</Link>
    </TopNav>
    )
}

export default TopNavBar