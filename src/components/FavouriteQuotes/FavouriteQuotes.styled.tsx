import styled from "@emotion/styled";
import { fadeIn } from "../../utils/style";
import { Icon } from "../Icon";

export const Wrapper = styled.div({
  display: "flex",
  position: "absolute",
  bottom: "60px",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
});

export const FavouriteQuotesList = styled.ul({
  display: "flex",
  margin: 0,
  padding: 0,
  justifyContent: "center",
  alignItems: "center",
  li: {
    marginRight: "10px",
    listStyle: "none",
    cursor: "pointer",
  },
  "li:last-child": {
    marginRight: "0px",
  },
});

export const FavouriteTitle = styled.div(({ theme }) => ({
  color: `${theme.colors.white}`,
  fontSize: "24px",
  textAlign: "center",
  marginBottom: "20px",
  textShadow: `2px 2px ${theme.colors.black}`,
  animation: `${fadeIn} 0.5s ease-in`,
}));

export const StyledIcon = styled(Icon)<{ selected?: boolean }>(
  ({ theme, selected }) => ({
    ...(selected && {
      border: `1px solid ${theme.colors.white}`,
    }),
  })
);
