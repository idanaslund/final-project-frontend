import React from "react"
import { Link } from 'react-router-dom'
import { TopNav } from '../theme/styles'

const TopNavBar = () => {
    return(
    <TopNav>
        <Link id="home" class-name="bm-item" to='/restaurants'>FIND RESTAURANT</Link>
        <Link id="profile" class-name="bm-item" to='/profile'>YOUR PROFILE</Link>
        <Link id="reviews" class-name="bm-item" to='/reviews'>REVIEWS</Link>
        <Link id="about" class-name="bm-item" to='/about'>ABOUT</Link>
        <Link id="logout" class-name="bm-item" to='/logout'>LOG OUT</Link>
    </TopNav>
    )
}

export default TopNavBar