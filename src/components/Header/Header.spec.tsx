import React from "react";
import { Header } from "./Header";
import { screen } from "@testing-library/react";
import { render } from "./../../utils/test";

describe("Header", () => {
  it("renders without crashing", () => {
    const { baseElement } = render(<Header />);
    expect(baseElement).toBeDefined();
  });

  it("should render header", () => {
    render(<Header />);
    expect(screen.getByText(/Give me a new quote/)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Give me a new quote" })
    ).toBeInTheDocument();
  });
});
