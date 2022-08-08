import backgroundFallbackImg from './assets/images/background-fallback.jpg';
import backgroundImg from './assets/images/background.jpg';
import { Background } from './components/Background';
import { Header } from './components/Header';
import { theme } from './theme/theme';
import { ThemeProvider } from '@emotion/react';
import { QuoteWrapper, Wrapper } from './App.styled';


import {
  FavouriteQuotesContextProvider,
  QuoteContextProvider,
} from "./context";
import { useState } from 'react';
import { Quote } from './components/Quote';


function App() {
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState<boolean>();
  const loadedHandler = () => {
    setIsBackgroundLoaded(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <QuoteContextProvider>
          <Background
            src={backgroundImg}
            fallbackSrc={backgroundFallbackImg}
            isLoaded={loadedHandler}
          />
          <FavouriteQuotesContextProvider>
            {
              <main>
                {isBackgroundLoaded && (
                  <>
                    <QuoteWrapper>
                      <Quote />
                    </QuoteWrapper>
                  </>
                )}
              </main>
            }
          </FavouriteQuotesContextProvider>

          <Header />
        </QuoteContextProvider>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;

