import { GlobalStyles } from './styles/GlobalStyles'
import styled from 'styled-components'
import Home from './pages/Home'

const AppContainer = styled.div`
  min-height: 100dvh;
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <Home />
    </AppContainer>
  )
}

export default App
