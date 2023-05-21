import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  /* Defina suas cores globais aqui */
  :root {
    --primary: #FDDA23;
    --secondary-color: #170F49;
    --text-color: #000000;
  }

  /* Defina suas fontes globais aqui */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    color: var(--text-color);
  }
`

export default GlobalStyles
