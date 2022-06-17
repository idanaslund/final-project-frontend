// Here we add all our global styles that we want to for example:
// Set a font-family for all our typography and set background on every page
// Override some browser default styling
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  :root {
  --theme-primary: #d8e4da;
  --theme-secondary: #da918b;

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