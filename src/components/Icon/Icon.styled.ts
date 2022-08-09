import styled from "@emotion/styled";
import { fadeIn } from "../../utils/style";

export const IconWrapper = styled.div<{ image: string }>(({ image }) => ({
  opacity: 1,
  backgroundImage: `url(${image})`,
  width: "40px",
  height: "40px",
  animation: `${fadeIn} 0.5s ease-in`,
}));

export const IconFallback = styled.div({
  width: "40px",
  height: "40px",
});
