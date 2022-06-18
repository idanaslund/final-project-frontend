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
img{max-height: 50px; margin-top: 20px;}
`


export const HeaderTitle = styled.h1`
margin-top: 0;
`

export const SecondHeader = styled.h2 `
font-size: 20px;
color: #2a5744;
`

export const ReastaurantCard = styled.div`
  margin: 10px 0 10px 0;
  border-bottom: solid 1px black;

  .restaurantImage {
    width: 100%;
    // max-height: 140px;
  }

  h2 {
    font-size: 12px;
    color: black;
    font-family: 'Cabin', sans-serif;
    font-size: 18px;
  }
`

export const FilterContainer = styled.article`
border: 1px solid darkgray;
margin: 10px;
padding: 1rem;
border-radius: 2px;
`

// Login & Signup Styling
export const LoginSignupPage = styled.main`
  display: flex;
  justify-content: center;

  .loginSignupContainer {
    background: white;
    border: 2px solid black;
    width: 70vw;
    border-radius: 60px;
    padding: 15px 0px;
  }
`


export const LoginSignupChoice = styled.div`
  h2 {
    text-align: center;
  }

  .modeChoice {
    display: -webkit-box;
    justify-content: center;
    margin: 10px;
    font-family: 'Cabin', sans-serif;
  }

  .modeQuestion {
    margin: 5px;
  }

  input {
    font-family: 'Cabin', sans-serif;
    font-size: 16px;
    background-color: #da918b;
    border: none;
    width: 80px;
    padding: 8px;
    border-radius: 30px;
  }
`

export const LoginSignupForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    background-color: white;
    padding: 5px;
    margin: 5px 0;
    border: 1px solid black;
    width: 200px;
    font-family: 'Cabin', sans-serif;
    border-radius: 60px;
  }

  .input-username {
    margin-top: 10px;
  }

  button {
    font-family: 'Cabin', sans-serif;
    font-size: 16px;
    background-color: #da918b;
    border: none;
    width: 125px;
    padding: 8px;
    margin-top: 14px;
    border-radius: 30px;
  }

  p {
    font-family: 'Cabin', sans-serif;
    font-size: 16px;
  }
`

export const Burger = styled.div`
  #page-wrap{
    text-align: center;
    overflow: auto;
    top: 45%;
    position: relative;
  }


  .page-wrap {
    display: flex;
    flex-direction: column;
  }

  #home, #profile, #about,  #logout {
    text-decoration: none;
    color: white;
    font-size: 20px;
    font-weight: 600;
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
      // background: #373a47;
      background: #da918b;
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
      background-color: #da918b;
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

    button {
      font-family: 'Cabin', sans-serif;
      font-size: 16px;
      background-color: white;
      border: none;
      width: 125px;
      padding: 8px;
      margin-top: 14px;
      border-radius: 30px;
    }
  
`

export const LogOutPage = styled.section`
    display: flex;
    justify-content: center;

    h3 {
      font-size: 18px;
      text-align: center;
    }

    .buttonContainer {
      display: flex;
      justify-content: center;
      padding: 10px;
    }

    .logoutButton {
      margin-right: 20px;
    }

    .LogOutContainer {
      display: block;
    }
`