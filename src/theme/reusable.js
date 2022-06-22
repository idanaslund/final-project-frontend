import styled from "styled-components";

/////////////// DEVICES ///////////////

export const devices = {
    mobile: "(min-width: 375px)",
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 1025px)"
}


/////////////// On all pages ///////////////

export const Container = styled.section`
width: 375px;
margin: 0 auto;

@media ${devices.tablet} {
    width: 768px;
}
@media ${devices.desktop} {
  width: 1025px;
}
`
export const MarginSection = styled.section`
margin: 1rem;

@media ${devices.tablet} {
  margin: 2rem;
}
@media ${devices.desktop} {
  margin: 3rem;
}
`

export const DarkGreenHeader = styled.h1`
    font-size: 24px;
    color: #2a5744;
    font-family: 'Cabin', sans-serif;
`

/////////////// Headings and paragraphs ///////////////

export const HeaderTitle = styled.h1`
margin-top: 0;
`

export const SecondHeader = styled.h2 `
font-size: 18px;
color: #2a5744;
font-family: 'Cabin', sans-serif;
`

export const SecondHeaderWithMargin = styled.h2 `
font-size: 20px;
color: #2a5744;
margin-block-end: 0.4px;
font-family: 'Cabin', sans-serif;
margin-top: 40px;
`

export const Paragraph = styled.p`
font-family: 'Raleway', sans-serif;
font-size: 16px;
`

export const ParagraphLInks = styled.span`
font-family: 'Raleway', sans-serif;
font-size: 16px;
font-weight: 500;
text-decoration: underline;
`

export const BoldParagraphs = styled.p`
font-family: 'Raleway', sans-serif;
color: #2a5744;
font-weight: 500;
`

/////////////// Buttons ///////////////

export const BackButton = styled.button`
font-family: 'Cabin', sans-serif;
font-size: 16px;
background-color: #da918b;
border: none;
width: 120px;
padding: 8px;
color: #2e2e2e;
display: flex;
justify-content: center;
&:hover {
    cursor: pointer;
  }
`

export const LogOutButton = styled.button`
font-family: 'Cabin', sans-serif;
font-size: 16px;
background-color: #2a5744;
border: none;
width: 120px;
padding: 8px;
color: #ffffff;
display: flex;
place-content: center;
&:hover {
    cursor: pointer;
  }
`
export const GetInspiredButton = styled.button`
font-family: 'Cabin', sans-serif;
font-size: 16px;
background-color: #2a5744;
color: white;
border: none;
width: 150px;
padding: 8px;

&:hover {
    cursor: pointer;
  }
`

export const PickRestaurantButton = styled.button`
font-family: 'Cabin', sans-serif;
font-size: 16px;
background-color: #2a5744;
color: white;
border: none;
width: 120px;
padding: 8px;
&:hover {
    cursor: pointer;
  }
`

export const SubmitButton = styled.button`
font-family: 'Cabin', sans-serif;
font-size: 16px;
background: #fdf8f8;
border: none;
width: 120px;
padding: 8px;
display: block;
color: #2e2e2e;
margin-top: 10px;
&:hover {
    cursor: pointer;
  }
`

export const CardWrapper = styled.article`
display: flex;
flex-wrap: wrap;
// padding: 10px;
justify-content: center;
width: 100%;

.link {
    text-decoration: none;
}
`

export const ButtonContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 44px;
width: 100%;
column-gap: 10px;
`

/////////////// Checkboxes ///////////////

export const Label = styled.label`
// padding: 8px;
// border: solid 1px #2a5744;
// border-radius: 2px;
margin-left: -6px;
width: 140px;
height: 40px;
margin-top: 10px;
color: #2a5744;
text-align: center;
line-height: 40px;
background: transparent;
`

export const StyledInput = styled.input`
/* appearance: inherit; // */

&:after + ${Label} {
    background: blue;
  }

`
// when clicked background:  #fdf1e8; /* Use this maybe? */
