import styled from "styled-components";

// STYLING: MOBILE FIRST!


/////////////// DEVICES ///////////////

export const devices = {
    mobile: "(min-width: 375px)",
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 1025px)"
}

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

/////////////// On all pages – Add this to section for space ///////////////
export const MarginSection = styled.section`
margin: 1rem;
`

/////////////// Headings and paragraphs ///////////////

export const HeaderTitle = styled.h1`
margin-top: 0;
`

export const SecondHeader = styled.h2 `
font-size: 20px;
color: #2a5744;
margin-block-end: 0.4px;
font-family: 'Cabin', sans-serif;
`

export const Paragraph = styled.p`
font-family: 'Cabin', sans-serif;
font-size: 16px;
`

/////////////// Buttons ///////////////

export const BackButton = styled.button`
font-family: 'Cabin', sans-serif;
font-size: 16px;
background-color: #da918b;
border: none;
width: 120px;
padding: 8px;
margin-left: 1rem;
color: #2e2e2e;
`
export const HomeButton = styled.button`
font-family: 'Cabin', sans-serif;
font-size: 16px;
background-color: #2a5744;
border: none;
width: 160px;
padding: 8px;
margin-left: 1rem;
color: white;
`

export const GetInspiredButton = styled.button`
font-family: 'Cabin', sans-serif;
font-size: 16px;
background-color: #2a5744;
color: white;
border: none;
width: 150px;
padding: 8px;
margin-left: 1rem;
`

export const CardWrapper = styled.article`
display: flex;
flex-wrap: wrap;
padding: 10px;

.link {
    text-decoration: none;
}
`

/////////////// Checkboxes ///////////////

export const Label = styled.label`
padding: 8px;
border: solid 1px #2a5744;
border-radius: 2px;
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
