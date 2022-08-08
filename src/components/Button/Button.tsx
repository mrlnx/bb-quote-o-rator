import styled from "@emotion/styled";
import { ButtonHTMLAttributes, FC } from "react";

const StyledButton = styled.button<{
  hasWrap?: boolean;
  hasPadding?: boolean;
}>(({ theme, hasWrap = false, hasPadding = true }) => ({
  display: "flex",
  background: `linear-gradient(130deg, ${theme.colors.main300} 0%, ${theme.colors.main200} 100%, ${theme.colors.main100} 90%)`,
  boxShadow: "inset 0px 2px 2px rgba(50,50,50,.6)",
  border: `1px solid ${theme?.colors.white}`,
  ...(hasPadding && { padding: "15px 40px" }),
  color: theme?.colors.white,
  fontSize: "14px",
  fontWeight: "bold",
  outline: 0,
  ...(!hasWrap && { whiteSpace: "nowrap" }),
  textTransform: "uppercase",
  textAlign: "center",
  alignItems: "center",
}));

type ButtonProps = {
  wrap?: boolean;
  padding?: boolean;
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  children,
  wrap,
  padding,
  ...props
}) => (
  <StyledButton hasWrap={wrap} hasPadding={padding} {...props}>
    {children}
  </StyledButton>
);
