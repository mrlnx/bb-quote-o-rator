import styled from "@emotion/styled";
import { fadeIn } from "../../utils/style";

export const IconWrapper = styled.div<{ image: string }>(({ image }) => ({
  opacity: 1,
  backgroundImage: `url(${image})`,
  width: "50px",
  height: "50px",
  animation: `${fadeIn} 0.5s ease-in`,
}));

export const IconFallback = styled.div({
  width: "50px",
  height: "50px",
});
