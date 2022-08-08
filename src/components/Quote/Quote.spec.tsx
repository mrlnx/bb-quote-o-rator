import React from "react";
import { screen } from "@testing-library/react";
import { render } from "./../../utils/test";
import { Quote } from "./Quote";
import { FavouriteQuotesContext, QuoteContext } from "../../context";
import { mockQuote } from "../../utils/mock";

describe("Quote", () => {
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
          }}
        >
          {element}
        </FavouriteQuotesContext.Provider>
      </QuoteContext.Provider>
    );
  };

  it("should render Quote", () => {
    setup(<Quote />, mockQuote.quote_id);
    expect(screen.getByText(mockQuote.quote)).toBeInTheDocument();
    expect(
      screen.getByText(mockQuote.author, { exact: false })
    ).toBeInTheDocument();

    expect(screen.getByRole("button", { name: /Tweet/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Unmark as favourite/i })
    ).toBeInTheDocument();
  });

  it("should render Quote without favourite", () => {
    setup(<Quote />, 0);

    expect(
      screen.getByRole("button", { name: /Mark as favourite/i })
    ).toBeInTheDocument();
  });
});
