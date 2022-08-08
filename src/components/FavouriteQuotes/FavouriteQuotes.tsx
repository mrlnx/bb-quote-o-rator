import { FC, useContext } from "react";
import { ICON_LIST } from "../../constants";
import { QuoteContext, FavouriteQuotesContext } from "../../context";
import {
  Wrapper,
  FavouriteQuotesList,
  FavouriteTitle,
  StyledIcon,
} from "./FavouriteQuotes.styled";

export const FavouriteQuotes: FC = () => {
  const { ids } = useContext(FavouriteQuotesContext);
  const { getQuoteById, selected } = useContext(QuoteContext);

  return (
    <Wrapper>
      {ids.length > 0 && (
        <>
          <FavouriteTitle>My favourite quotes</FavouriteTitle>
          <FavouriteQuotesList>
            {ids.map((id, index) => (
              <li key={index} onClick={() => getQuoteById(id)}>
                <StyledIcon
                  selected={selected === id}
                  name={ICON_LIST[index]}
                />
              </li>
            ))}
          </FavouriteQuotesList>
        </>
      )}
    </Wrapper>
  );
};
