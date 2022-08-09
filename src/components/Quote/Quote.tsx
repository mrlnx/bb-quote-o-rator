import { FC, useContext } from "react";
import { BASE_URL, TWITTER_BASE_URL } from "../../constants";
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
  const { ids, add, remove, maxLimit } = useContext(FavouriteQuotesContext);
  const { quote } = useContext(QuoteContext);

  if (!quote) {
    return <></>;
  }

  const quoteSaved = ids.includes(quote.quote_id);
  const storeQuoteHandler = () => {
    if (!quoteSaved) {
      add(quote.quote_id);
    } else {
      remove(quote.quote_id);
    }
  };

  const tweetHandler = () => {
    window.open(
      `${TWITTER_BASE_URL}?original_referer=${BASE_URL}&text=I found this Breaking Bad quote on ${BASE_URL}: ${quote?.quote} — ${quote?.author}`,
      "_blank"
    );
  };

  return (
    <Wrapper>
      <QuoteLines>
        <QuoteLine>{quote?.quote}</QuoteLine>
        <AuthorLine>— {quote?.author}</AuthorLine>
      </QuoteLines>
      <Buttons>
        <Button name="tweet-btn" onClick={() => tweetHandler()} disabled={maxLimit}>
          Tweet
        </Button>
        <Button name="favourite-btn" onClick={() => storeQuoteHandler()}>{`${
          quoteSaved ? "Unmark" : "Mark"
        } as favourite`}</Button>
      </Buttons>
    </Wrapper>
  );
};
