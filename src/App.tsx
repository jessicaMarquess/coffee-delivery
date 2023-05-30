import styled, { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'

import { HeartBreak } from 'phosphor-react'

export const Container = styled.h1`
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  color: ${(props) => props.theme['purple-dark']};
`

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>oi, sou mó legal! confia ✌️</Container>
      <HeartBreak size={24} color="#4B2995" />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
