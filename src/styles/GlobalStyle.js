import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F3F5FD;
    --primary: #2C3BDC;
    --element: #FFF;
    --text: #29306C;
    --text-strong: #00087F;
    --icon: #2B316C;
  }
  
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background: var(--background);
  }
`
