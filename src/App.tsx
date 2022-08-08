import { Wrapper } from "./App.styled";

import { Background } from "./components/Background";

import {
  QuoteContextProvider,
} from "./context";

import backgroundImg from "./assets/images/background.jpg";
import backgroundFallbackImg from "./assets/images/background-fallback.jpg";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <QuoteContextProvider>
          <Background
            src={backgroundImg}
            fallbackSrc={backgroundFallbackImg}
          />
        </QuoteContextProvider>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
