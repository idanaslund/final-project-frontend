import styled from "styled-components";


// STYLING: MOBILE FIRST!


export const devices = { 
    mobile: "(min-width: 375px)",
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 1025px)"
}

export const Paragraph = styled.p`
font-family: 'Cabin', sans-serif;
font-size: 18px;
`

export const BackButton = styled.button`
font-family: 'Cabin', sans-serif;
font-size: 16px;
background-color: #C5B5C8;
border: none;
width: 150px;
padding: 8px;

`