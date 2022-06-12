// Here we add all our global styles that we want to for example:
// Set a font-family for all our typography and set background on every page
// Override some browser default styling


import { createGlobalStyle } from 'styled-components'

export default GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  }

`

// Continue adding global design here