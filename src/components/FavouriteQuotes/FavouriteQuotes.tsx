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
  const { ids, remove } = useContext(FavouriteQuotesContext);
  const { selected, getQuoteById } = useContext(QuoteContext);

  const clickHandler = (e: React.MouseEvent<Element, MouseEvent>, id: number) => {
    e.preventDefault();
    if(e.detail === 1) {
      getQuoteById(id);
    } else {
      remove(id);
    }
  }

  return (
    <Wrapper>
      {ids.length > 0 && (
        <>
          <FavouriteTitle>My favourite quotes</FavouriteTitle>
          <FavouriteQuotesList>
            {ids.map((id, index) => (
              <li key={index} onClick={(e) => clickHandler(e, id)}>
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
