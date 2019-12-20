import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 5%;
    background: ${({ theme }) => theme.colors.primary};
    font-size: 1rem;
  }
`

export default GlobalStyle