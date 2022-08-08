import React from "react";
import { screen, waitFor } from "@testing-library/react";
import { Background } from "./Background";

import backgroundImg from "./../../assets/images/background.jpg";
import backgroundFallbackImg from "./../../assets/images/background-fallback.jpg";
import { render } from "../../utils/test";

describe("Background", () => {
  it("renders without crashing", () => {
    const { baseElement } = render(
      <Background src={backgroundImg} fallbackSrc={backgroundFallbackImg} />
    );
    expect(baseElement).toBeDefined();
  });

  it("should render Image", async () => {
    const isLoadedMock = jest.fn();
    render(
      <Background src={backgroundImg} fallbackSrc={backgroundFallbackImg} isLoaded={() => isLoadedMock()} />
    );
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it("shouldnot render Image", async () => {
    const isLoadedMock = jest.fn();
    render(
      <Background src={""} fallbackSrc={""} isLoaded={() => isLoadedMock()} />
    );
    expect(screen.getByRole('img')).toBeInTheDocument();

    await waitFor(() => {
      expect(isLoadedMock).not.toBeCalled();
    })
  });
});
