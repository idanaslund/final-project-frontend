import styled from "styled-components";

// STYLING: MOBILE FIRST!


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

export const Paragraph = styled.p`
font-family: 'Cabin', sans-serif;
font-size: 18px;
`

export const BackButton = styled.button`
font-family: 'Cabin', sans-serif;
font-size: 16px;
background-color: #da918b;
border: none;
width: 150px;
padding: 8px;
`

export const CardWrapper = styled.article`
display: flex;
flex-wrap: wrap;
padding: 10px;

.link{
    text-decoration: none;
}
`
