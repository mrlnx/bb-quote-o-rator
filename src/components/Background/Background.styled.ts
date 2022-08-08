import styled, { CSSObject } from "@emotion/styled";

export const Wrapper = styled.div({
  margin: "0",
  height: "100%",
  overflow: "hidden",
});

export const BackgroundImage = styled.img<{ isLoading?: boolean }>(
  ({ isLoading = false }): CSSObject => ({
    ...(isLoading
      ? {
          filter: "blur(10px)",
          clipPath: "inset(0)",
        }
      : {
          filter: "blur(0px)",
          transition: "filter 0.5s linear",
        }),
    minHeight: "100%",
    minWidth: "100%",
    height: "auto",
    width: "auto",
    position: "absolute",
    top: "-100%",
    bottom: "-100%",
    left: "-100%",
    right: "-100%",
    margin: "auto",
  })
);
