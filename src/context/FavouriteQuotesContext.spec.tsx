import { waitFor, screen, fireEvent } from "@testing-library/react";
import { useContext } from "react";
import { render } from "../utils/test";
import {
  FavouriteQuotesContext,
  FavouriteQuotesContextProvider,
} from "./FavouriteQuotesContext";

describe("FavouriteQuotesContext", () => {
  const TestComponent = () => {
    const { ids, add, remove } = useContext(FavouriteQuotesContext);

    return (
      <>
        <div>{ids[0]}</div>
        <button onClick={() => add(1)}>Add</button>
        <button onClick={() => remove(1)}>Remove</button>
      </>
    );
  };

  it("should add item", async () => {
    render(
      <FavouriteQuotesContextProvider>
        <TestComponent />
      </FavouriteQuotesContextProvider>
    );

    fireEvent.click(screen.getByRole("button", { name: "Add" }));

    await waitFor(() => {
      expect(screen.getByText(/1/i)).toBeInTheDocument();
    });
  });

  it("should remove item", async () => {
    render(
      <FavouriteQuotesContextProvider>
        <TestComponent />
      </FavouriteQuotesContextProvider>
    );

    fireEvent.click(screen.getByRole("button", { name: "Add" }));
    fireEvent.click(screen.getByRole("button", { name: "Remove" }));

    await waitFor(() => {
      expect(screen.queryByText(/1/i)).not.toBeInTheDocument();
    });
  });
});
