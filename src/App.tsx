import backgroundFallbackImg from './assets/images/background-fallback.jpg';
import backgroundImg from './assets/images/background.jpg';
import { Background } from './components/Background';
import { Header } from './components/Header';
import { theme } from './theme/theme';
import { ThemeProvider } from '@emotion/react';
import { Wrapper } from './App.styled';


import {
  QuoteContextProvider,
} from "./context";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <QuoteContextProvider>
          <Background
            src={backgroundImg}
            fallbackSrc={backgroundFallbackImg}
          />
          <Header />
        </QuoteContextProvider>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
