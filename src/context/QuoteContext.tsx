import {
  createContext,
  FC,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { fetchRandomQuote, fetchQuoteById } from "../api/QuotesService";
import { Quote as QuoteType, AbstractErrors } from "../typings/types";

export interface QuoteContextType {
  loading?: boolean;
  errors?: AbstractErrors;
  quote?: QuoteType;
  selected?: number;
  getQuote: () => void;
  getQuoteById: (id: number) => void;
}

export const QuoteContext = createContext<QuoteContextType>({
  loading: true,
  errors: [],
  getQuote: () => {},
  getQuoteById: () => {},
});

export const QuoteContextProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [errors, setErrors] = useState<AbstractErrors>();
  const [quote, setQuote] = useState<QuoteType>();
  const [selected, setSelected] = useState<number>();

  const getQuote = useCallback(() => {
    fetchRandomQuote()
      .then((res) => setQuote(res))
      .catch((e) => setErrors(e))
      .finally(() => setLoading(false));
  }, []);

  const getQuoteById = useCallback((id: number) => {
    fetchQuoteById(id)
      .then((res) => setQuote(res))
      .catch((e) => setErrors(e))
      .finally(() => setLoading(false));
  }, []);

  const selectQuote = useCallback((id: number) => {
    setSelected(id);
  }, []);

  useEffect(() => {
    let isSubscribed = true;

    fetchRandomQuote()
      .then((res) => (isSubscribed ? setQuote(res) : null))
      .catch((e) => setErrors(e))
      .finally(() => setLoading(false));

    return () => {
      isSubscribed = false;
    };
  }, []);

  useEffect(() => {
    quote && selectQuote(quote?.quote_id);
  }, [quote, selectQuote]);

  const value = useMemo<QuoteContextType>(
    () => ({
      selected,
      loading,
      errors,
      quote,
      getQuote,
      getQuoteById,
    }),
    [selected, loading, errors, quote, getQuote, getQuoteById]
  );

  return (
    <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>
  );
};
