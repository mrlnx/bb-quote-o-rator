import styled from "@emotion/styled";
import { Button } from "../Button";

export const Wrapper = styled.header(({ theme }) => ({
  position: "absolute",
  top: `${theme.spacings.m}px`,
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  alignItems: "center",
}));

export const Logo = styled.img(({ theme }) => ({
  width: "170px",
  marginLeft: `${theme.spacings.m}px`,
}));

export const StyledNewButton = styled(Button)(({ theme }) => ({
  marginRight: `${theme.spacings.m}px`,
  height: "100px",
  width: "100px",
  background: `linear-gradient(130deg, ${theme.colors.accent200} 0%, ${theme.colors.accent100} 100%, ${theme.colors.main100} 90%)`,
  textShadow: `1px solid ${theme.colors.black}`,
  lineHeight: "24px",
}));
