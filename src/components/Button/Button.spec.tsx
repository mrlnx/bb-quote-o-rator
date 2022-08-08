import React from "react";
import { screen } from "@testing-library/react";
import { render } from "./../../utils/test";
import { Button } from "./Button";

describe("Background", () => {
  it("renders without crashing", () => {
    const { baseElement } = render(<Button onClick={() => jest.fn()} />);
    expect(baseElement).toBeDefined();
  });

  it("should render button", () => {
    const label = "Button label";
    render(<Button>{label}</Button>);
    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
