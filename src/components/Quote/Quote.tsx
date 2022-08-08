import { FC, useContext } from "react";
import { FavouriteQuotesContext } from "../../context/FavouriteQuotesContext";
import { QuoteContext } from "../../context/QuoteContext";
import { Button } from "../Button/Button";
import {
  Wrapper,
  Buttons,
  QuoteLines,
  AuthorLine,
  QuoteLine,
} from "./Quote.styled";

export const Quote: FC = () => {
  const { ids, add, remove } = useContext(FavouriteQuotesContext);
  const { quote } = useContext(QuoteContext);

  if (!quote) {
    return <></>;
  }

  const quoteSaved = ids.includes(quote.quote_id);
  const storeQuoteHandler = () => {
    if (quoteSaved) {
      remove(quote.quote_id);
    } else {
      add(quote.quote_id);
    }
  };

  const tweetHandler = () => {
    console.log("tweetHandler");
  };

  return (
    <Wrapper>
      <QuoteLines>
        <QuoteLine>{quote?.quote}</QuoteLine>
        <AuthorLine>— {quote?.author}</AuthorLine>
      </QuoteLines>
      <Buttons>
        <Button name="tweet-btn" onClick={() => tweetHandler()}>
          Tweet
        </Button>
        <Button name="favourite-btn" onClick={() => storeQuoteHandler()}>{`${
          quoteSaved ? "Unmark" : "Mark"
        } as favourite`}</Button>
      </Buttons>
    </Wrapper>
  );
};
