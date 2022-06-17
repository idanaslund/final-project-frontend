import styled from "styled-components"

export const devices = { 
    mobile: "(min-width: 375px)",
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 1025px)"
}

export const StyledHeader = styled.header`
// background-color: white;
margin-bottom: 10px;
text-align: center;
`

export const HeaderTitle = styled.h1`
margin-top: 0;
`

export const StyledRestaurantList = styled.main`
  .restaurantListPage {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
  }

  .restaurantImage {
    width: 100%;
    max-height: 140px;

  }

  .restaurantListPage a {
    width: 25%;
    color: black;
    text-decoration: none;
  }

  .restaurantCard {
    margin: 5px;
    border: solid 1px black;
  }

  h2 {
    font-size: 12px;
  }
`
export const Burger = styled.div`
#page-wrap{
text-align: center;
overflow: auto;
top: 45%;
position: relative;
}

#home, #profile, #about {
  text-decoration: none;
  color: white;
  font-size: 20px;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  list-style: none;
}

.bm-item {
    display: inline-block;
  
    /* Our sidebar item styling */
    text-decoration: none;
    margin-bottom: 10px;
    color: #d1d1d1;
    transition: color 0.2s;
  }
  
  .bm-item:hover {
    color: white;
  }
  
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 36px;
    top: 36px;
  }
  
  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #373a47;
  }
  
  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }
  
  /* Color/shape of close button cross */
  .bm-cross {
    background: white;
  }
  
  /* General sidebar styles */
  .bm-menu {
    background-color: #C5B5C8;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }
  
  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }
  
  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
  }
  
  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
  
`