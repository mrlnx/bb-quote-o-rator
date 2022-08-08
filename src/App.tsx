import { useEffect, useState } from "react";
import { fetchRandomQuote } from "./api/QuotesService";
import { Quote as QuoteType } from './typings/types';

function App() {

  const [quote, setQuote] = useState<QuoteType>();

  useEffect(() => {
    let isSubscribed = true;

    fetchRandomQuote()
      .then((res) => (isSubscribed ? setQuote(res) : null))
      .catch(console.error);

    return () => {
      isSubscribed = false;
    };
  }, []);

  return (<div>
    <div>{quote?.quote} by {quote?.author}</div>
  </div>);
}

export default App;
