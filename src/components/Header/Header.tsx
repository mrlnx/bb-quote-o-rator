import { Logo, StyledNewButton, Wrapper } from "./Header.styled";
import logo from "./../../assets/images/logo.svg";
import { FC, useContext } from "react";
import { QuoteContext } from "../../context/QuoteContext";

export const Header: FC = () => {
  const { getQuote } = useContext(QuoteContext);
  return (
    <Wrapper>
      <Logo src={logo} />
      <div>
        <StyledNewButton padding={false} wrap onClick={() => getQuote()}>
          Give me a new quote
        </StyledNewButton>
      </div>
    </Wrapper>
  );
};
