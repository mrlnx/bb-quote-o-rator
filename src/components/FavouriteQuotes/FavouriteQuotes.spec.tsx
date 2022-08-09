import React from "react";
import { FavouriteQuotes } from "./FavouriteQuotes";
import { FavouriteQuotesContext, QuoteContext } from "../../context";
import { mockQuote } from "../../utils/mock";
import { render } from "./../../utils/test";
import { screen, waitFor } from "@testing-library/react";

describe("FavouriteQuotes", () => {
  const setup = (element: React.ReactNode, id: number) => {
    return render(
      <QuoteContext.Provider
        value={{
          quote: mockQuote,
          getQuote: jest.fn(),
          getQuoteById: jest.fn(),
        }}
      >
        <FavouriteQuotesContext.Provider
          value={{
            ids: [id],
            add: jest.fn(),
            remove: jest.fn(),
            maxLimit: false
          }}
        >
          {element}
        </FavouriteQuotesContext.Provider>
      </QuoteContext.Provider>
    );
  };

  it("renders without crashing", () => {
    const { baseElement } = render(<FavouriteQuotes />);
    expect(baseElement).toBeDefined();
  });

  it("should render FavouriteQuotes", async () => {
    setup(<FavouriteQuotes />, mockQuote.quote_id);
    expect(screen.getByText(/My favourite quotes/i)).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByTestId("ai")).toBeInTheDocument();
    });
  });
});
