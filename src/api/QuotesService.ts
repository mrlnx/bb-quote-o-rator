import { Quotes, Quote } from "./../typings/types";

const API_PREFIX = "https://www.breakingbadapi.com";

type ApiQuotes = Quotes;
type ApiResponse<T> = T;

export const fetchApi = <T>(path: string): Promise<T> =>
  fetch(`${API_PREFIX}${path}`)
    .then((res) => res.json())
    .then((res: ApiResponse<T>) => {
      if (res) return res;
      return Promise.reject(res);
    });

export const fetchRandomQuote = (): Promise<Quote> =>
  fetchApi<ApiQuotes>("/api/quote/random").then((quote) => quote[0]);

export const fetchQuotes = (): Promise<Quotes> =>
  fetchApi<ApiQuotes>("/api/quotes").then((quotes) => quotes);

export const fetchQuoteById = (id: number): Promise<Quote> =>
  fetchApi<ApiQuotes>(`/api/quotes/${id}`).then((quote) => quote[0]);
