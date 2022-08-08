export interface Quote {
  quote_id: number;
  quote: string;
  author: string;
}

export type Quotes = Quote[];

export type AbstractError = {
  code?: string;
  description?: string;
  intl: string;
  name?: string;
};

export type AbstractErrors = Array<AbstractError>;
