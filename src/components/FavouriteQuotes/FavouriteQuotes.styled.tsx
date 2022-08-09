import styled from "@emotion/styled";
import { fadeIn } from "../../utils/style";
import { Icon } from "../Icon";

export const Wrapper = styled.div(({ theme }) => ({
  display: "flex",
  position: "absolute",
  bottom: `${theme.spacings.m}px`,
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
}));

export const FavouriteQuotesList = styled.ul(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  li: {
    marginRight: `${theme.spacings.s}px`,
    listStyle: "none",
    cursor: "pointer",
  },
  "li:last-child": {
    marginRight: "0px",
  },
}));

export const FavouriteTitle = styled.div(({ theme }) => ({
  color: theme.colors.white,
  fontSize: theme.typography.fontL,
  textAlign: "center",
  marginBottom: `${theme.spacings.m}px`,
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
