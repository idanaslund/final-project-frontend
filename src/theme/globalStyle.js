// Here we add all our global styles that we want to for example:
// Set a font-family for all our typography and set background on every page
// Override some browser default styling
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  :root {
  --theme-darkgray: #2e2e2e;
  --theme-lightgreen: #d8e4da; 
  --theme-softgreen: #4e7565;
  --theme-pinkish: #da918b;
  --theme-darkgreen: #2a5744;
  --theme-lightpinkish: #fbf4f3;
  }
  body {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-family: 'Raleway', sans-serif;
  background: #d8e4da;
  }
`

// Continue adding global design here


export default GlobalStyle