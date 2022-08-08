import { waitFor, screen, fireEvent } from "@testing-library/react";
import { useContext } from "react";
import { render } from "../utils/test";
import { QuoteContext, QuoteContextProvider } from "./QuoteContext";
import * as API from "../api/QuotesService";
import { mockQuote } from "../utils/mock";

describe("QuoteContext", () => {
  const TestComponent = () => {
    const { quote, getQuote, getQuoteById } =
      useContext(QuoteContext);

    return (
      <>
        <div>
          <div>{quote?.quote}</div>
          <div>{quote?.author}</div>
        </div>

        <button onClick={() => getQuote()}>Random</button>
        <button onClick={() => getQuoteById(1)}>Get quote by id</button>
      </>
    );
  };

  it("should get random quote", async () => {

    jest.spyOn(API, "fetchRandomQuote").mockImplementation(() =>
      Promise.resolve({
        quote_id: mockQuote.quote_id,
        quote: mockQuote.quote,
        author: mockQuote.author,
      })
    );

    render(
      <QuoteContextProvider>
        <TestComponent />
      </QuoteContextProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(/We make poison for people who don’t care. We probably have the most unpicky customers in the world./i)).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText(/Jesse Pinkman/i)).toBeInTheDocument();
    });
  });


  it("should get quote by id", async () => {

    jest.spyOn(API, "fetchRandomQuote").mockImplementation(() =>
      Promise.resolve({
        quote_id: mockQuote.quote_id,
        quote: mockQuote.quote,
        author: mockQuote.author,
      })
    );

    render(
      <QuoteContextProvider >
        <TestComponent />
      </QuoteContextProvider>
    );

    fireEvent.click(screen.getByRole('button', { name: 'Get quote by id' }));

    await waitFor(() => {
      expect(screen.getByText(/We make poison for people who don’t care. We probably have the most unpicky customers in the world./i)).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText(/Jesse Pinkman/i)).toBeInTheDocument();
    });
  });
});
