export interface Quote {
  quote_id: number;
  quote: string;
  author: string;
}

export type Quotes = Quote[];

const API_PREFIX = "https://www.breakingbadapi.com";

type ApiQuotes = Quotes;
type ApiResponse<T> = T;

export const fetchApi = <T>(path: string): Promise<T> =>
  fetch(`${API_PREFIX}${path}`)
    .then((response) => response.json())
    .then((response: ApiResponse<T>) => {
      if (response) return response;
      return Promise.reject(response);
    });

export const fetchRandomQuote = (): Promise<Quote> =>
  fetchApi<ApiQuotes>("/api/quote/random").then((quote) => quote[0]);
