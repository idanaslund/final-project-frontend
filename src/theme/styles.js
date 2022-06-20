import styled from "styled-components"

export const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)"
}

/////////////// Header styling ///////////////

export const StyledHeader = styled.header`
margin-bottom: 10px;
text-align: center;
img{max-height: 50px; margin-top: 20px;}
`

/////////////// Restaurant card on Filtering page ///////////////

export const RestaurantCard = styled.div`
  margin: 10px 0 10px 0;
  border-bottom: solid 1px black;

  .restaurantImage {
    width: 100%;
  }

  h2 {
    font-size: 12px;
    color: #2e2e2e;
    font-family: 'Cabin', sans-serif;
    font-size: 18px;
  }
`
// /////////////// Filtering Page ///////////////

export const FilterContainer = styled.article`
border: 1px solid darkgray;
margin: 10px;
padding: 1rem;
border-radius: 2px;
`

/////////////// Login / Signup ///////////////

export const LoginSignupPage = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  .loginSignupContainer {
    background: white;
    border: 1px solid #2a5744;
    width: 70vw;
    padding: 15px 0px;
    margin-top: 25px;
  }
`

export const LoginSignupChoice = styled.div`
  h2 {
    text-align: center;
    font-size: 24px;
    color: #2a5744;
    font-family: 'Cabin', sans-serif;
  }

  .modeChoice {
    display: -webkit-box;
    justify-content: center;
    margin: 10px;
    font-family: 'Cabin', sans-serif;
  }

  .modeQuestion {
    margin: 9px;
  }

  input {
    font-family: 'Cabin', sans-serif;
    font-size: 16px;
    background-color: #da918b;
    border: none;
    width: 70px;
    padding: 8px;
    border-radius: 1px;
  }
`

export const RegisterButton = styled.button`
    font-family: 'Cabin', sans-serif;
    font-size: 16px;
    background-color: #da918b;
    border: none;
    width: 80px;
    padding: 8px;
    border-radius: 1px;
`

export const LoginSignupForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    background-color: white;
    padding: 7px;
    margin: 5px 0;
    border: 1px solid black;
    width: 200px;
    font-family: 'Cabin', sans-serif;
    border-radius: 2px;
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
    border-radius: 1px;
  }

  p {
    font-family: 'Cabin', sans-serif;
    font-size: 16px;
  }
`

/////////////// Burger menu ///////////////

export const Burger = styled.div`
  #page-wrap{
    text-align: center;
    overflow: auto;
    top: 10px;
    position: relative;
  }


  .page-wrap {
    display: flex;
    flex-direction: column;
  }

  #home, #profile, #reviews, #about, #logout {
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
      position: absolute;
      width: 42px;
      height: 30px;
      left: 16px;
      top: 32px;
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


/////////////// Review page ///////////////

export const ReviewContainer = styled.article`
position: relative;
padding: 0.6em;
overflow-wrap: break-word;
margin: 1.5rem 0 1.5rem 0;
background: #fbf4f352;
color: #2E2E2E;
`

export const RestaurantName = styled.p`
font-size: 18px;
font-weight: 700;
color: #2A5744;
`
export const StyledReviewBox = styled.article`
margin-top: 15px;
margin-bottom: 10px;
display: flex;
flex-direction: column;
align-items: center;
`
export const Reviews = styled.div`
background: #fdf8f8;
border: #2E2E2E solid 1px;
font-size: 16px;
font-weight: 300;
border-radius: 2px;
padding: 0.4em;
width: 300px;
`

export const ReviewInfo = styled.p`
display: inline;
position: absolute;
right: 10px;
top: 140px;
font-weight: 500;
`

export const TimePosted = styled.p`
display: inline;
font-size: 16px;
`

/////////////// Post Review secion ///////////////

export const PostReviewBox = styled.div`
  padding: 0.6em;
  font-family: "Roboto", sans-serif;
  max-width: 375px;
  overflow-wrap: break-word;
  margin: 1.5rem 0 1.5rem 0;
  background: #fbf4f352;
  padding-top: 18px;
`

export const ReviewBoxTitle = styled.h2`
font-size: 16px;
font-weight: 400;
color: #2a5744;
margin-block-start: 0px;
margin-block-end: 5.4px;
`

export const TextLabel = styled.label`
font-size: 16px;
color: #2e2e2e;
font-family: 'Cabin', sans-serif;
`

export const ReviewTextArea = styled.textarea`
font-family: 'Raleway', sans-serif;
border-radius: 2px;
padding: 0.4em;
width: 95%;
background: #fdf8f8;
font-size: 16px;
`

export const SubmitReservationButton = styled.button`
font-family: 'Cabin', sans-serif;
font-size: 16px;
background: #fff;
border: none;
width: 120px;
padding: 8px;
display: block;
`

export const Characters = styled.p`
margin-block-start: 5.4px;
color: #2e2e2e;
font-family: 'Cabin', sans-serif;
`

export const ButtonBox = styled.div`
text-align: center;
`

export const LinkContainer = styled.div`
font-family: 'Cabin', sans-serif;
color: #2a5744;
display: block;
`

export const TypeOfFood = styled.p`
background: #fbf4f3;
display: inline-block;
padding: 8px;
font-family: 'Cabin', sans-serif;
margin-block-end: 0;
`

export const RestaurantAddress = styled.div`
font-family: 'Cabin', sans-serif;
color: #4e7565;
line-height: 1.6;
`

export const RestaurantLink = styled.a`
color: #4e7565;
`

export const RestaurantDescription = styled.p`
font-family: 'Raleway', sans-serif;
font-size: 16px;
background: #fbf4f3;
padding: 0.6em;
line-height: 1.6;
color: #2e2e2e;
`

export const OpenHoursContainer = styled.div`
font-family: 'Raleway', sans-serif;
line-height: 0.6;
background: #fbf4f3;
padding: 10px;
margin-top: 1.4rem;
`

export const ListedHours = styled.p`
font-size: 16px;
color: #2e2e2e;
`

export const BookATableContainer = styled.form`
margin-top: 20px;
background: #fbf4f3;
padding: 8px;
`

export const BookATableInput = styled.input`
font-family: 'Raleway',sans-serif;
font-size: 16px;
margin-bottom: 8px;
border: none;
padding: 8px;
width: 74%;
`

export const BookATableTextArea = styled.textarea`
font-family: 'Raleway',sans-serif;
font-size: 16px;
margin-bottom: 8px;
border: none;
padding: 8px;
width: 74%;
overflow-wrap: break-word;
height: 86px;
`

export const BookATableLogo = styled.img`
height: 40px;
display: block;
margin-bottom: 10px;
`

/////////////// Log out page ///////////////
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

/////////////// Restaurant details page ///////////////
export const ImageWrapper = styled.img`
width: 340px;
`

/////// Profile page ///////////////////////////

export const ProfileWrapper = styled.article`
padding: 0.6em;
max-width: 375px;
overflow-wrap: break-word;
margin: 1.5rem 0 1.5rem 0;
background: #fbf4f352;
color: #2e2e2e;
`

export const ProfileForm = styled.form`
margin-top: 10px;
`

export const ProfileInput = styled.input`
    background-color: white;
    padding: 7px;
    margin: 5px 0;
    border: 1px solid black;
    width: 200px;
    font-family: 'Cabin', sans-serif;
    border-radius: 2px;
`

///////////// About page ///////////////////

export const AboutContainer = styled.article`
position: relative;
padding: 0.6em;
overflow-wrap: break-word;
margin: 1.5rem 0 1.5rem 0;
background: #fbf4f352;
color: #2E2E2E;

a {
  text-decoration: none;
  color: #2e2e2e;
}

h4 {
  margin: 3px 0 3px 0;
  text-align: end;
  font-family: 'Cabin',sans-serif;
}

p {
  margin-bottom: 2px;
}
`


export const AboutProfileTexts = styled.p`
font-family: 'Raleway', sans-serif;
font-size: 16px;
max-width: 84%;
margin-block-start: 0.2px;
line-height: 1.2;
`

export const LongerTexts = styled.p`
font-family: 'Raleway', sans-serif;
font-size: 16px;
margin-block-start: 0.2px;
line-height: 1.4;
`

export const EmmaImage = styled.img`
border-radius: 50%;
position: absolute;
height: 88px;
right: -4px;
top: 116px;
z-index: 1;
`

export const JoannaImage = styled.img`
border-radius: 50%;
position: absolute;
height: 88px;
right: -4px;
top: 78px;
z-index: 1;
`

export const IdaImage = styled.img`
border-radius: 50%;
position: absolute;
height: 88px;
right: -4px;
top: 81px;
z-index: 1;
`

export const LastContainerMarginBottom = styled.div`
margin-bottom: 40px;
`

export const FirstContainer = styled.div`
display: block;

@media ${devices.tablet} {
  display: flex;
flex-direction: row;
}
@media ${devices.desktop} {
  width: 1025px;
}

`

export const SecondContainer = styled.div`
display: block;

@media ${devices.tablet} {
  display: flex;
flex-direction: row;
}
@media ${devices.desktop} {
  width: 1025px;
}

`

export const WholeAboutContainer = styled.div`

@media ${devices.tablet} {
  width: 50%;
  display: flex;
  column-gap: 30px;
}
`

/////////////// Footer styling ///////////////

export const FooterStyling = styled.section`
  display: flex; 
  justify-content: center;

  .footerContainer {
    text-align: center;
    font-size: 18px;
    color: #2E2E2E;
    padding: 0px 10px;
    width: 70vw;
    line-height: 1.5;
  }
`

/////////////// 404 Not found-page ///////////////

export const NotFoundContainer = styled.div`
text-align: center;
margin-top: 40px;
`

export const BackToHomePageButton = styled.button`
background: #da918b;
font-family: 'Cabin', sans-serif;
font-size: 16px;
color: white;
border: none;
width: 150px;
padding: 8px;
`