import React from "react";
import { screen, waitFor } from "@testing-library/react";
import { Icon } from "./Icon";
import { render } from "../../utils/test";

describe("Icon", () => {
  it("renders without crashing", () => {
    const { baseElement } = render(<Icon name="br" />);
    expect(baseElement).toBeDefined();
  });

  it("should render icon", async () => {
    render(<Icon name="br" />);

    await waitFor(() => {
      expect(screen.getByTestId("br")).toBeInTheDocument();
    })
  });

  it("should render fallback", () => {
    render(<Icon name="no-icon" />);
    expect(screen.queryByTestId("br")).not.toBeInTheDocument();
  });
});
