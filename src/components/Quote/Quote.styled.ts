import styled from "@emotion/styled";
import { fadeIn } from "../../utils/style";

export const Wrapper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  flexDirection: "column",
});

export const QuoteLines = styled.div(({ theme }) => ({
  display: "flex",
  width: "700px",
  color: theme.colors.white,
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  "@media (min-width: 375px)": {
    width: "400px",
  },
  "@media (min-width: 640px)": {
    width: "600px",
  },
  "@media (min-width: 768px)": {
    width: "700px",
  },
  "@media (min-width: 1024px)": {
    width: "1000px",
  },
  animation: `${fadeIn} 0.5s ease-in`,
}));

export const QuoteLine = styled.div(({ theme }) => ({
  display: "flex",
  fontSize: "32px",
  textAlign: "center",
  justifyContent: "center",
  textShadow: `2px 2px ${theme.colors.black}`,
  "@media (min-width: 375px)": {
    fontSize: "32px",
  },
  "@media (min-width: 648px)": {
    fontSize: "42px",
  },
  "@media (min-width: 768px)": {
    fontSize: "48px",
  },
}));

export const AuthorLine = styled.div(({ theme }) => ({
  display: "flex",
  fontSize: "24px",
  justifyContent: "center",
  paddingTop: "30px",
  textShadow: `1px 1px ${theme.colors.black}`,
}));

export const Buttons = styled.div({
  display: "flex",
  width: "380px",
  justifyContent: "center",
  gap: "20px",
  paddingTop: "50px",
  animation: `${fadeIn} 0.5s ease-in`,
});
