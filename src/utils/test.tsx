import { ThemeProvider } from "@emotion/react";
import { render as newRender } from "@testing-library/react";
import { theme } from "../theme/theme";

export const render = (props: any) => {
  return newRender(<ThemeProvider theme={theme}>{props}</ThemeProvider>);
};
