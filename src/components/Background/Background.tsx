import { FC, useEffect, useState } from "react";
import { BackgroundImage, Wrapper } from "./Background.styled";

type BackgroundProps = {
  src: string;
  fallbackSrc: string;
  isLoaded?: () => void;
};

export const Background: FC<BackgroundProps> = ({
  src,
  fallbackSrc,
  isLoaded,
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [imageSrc, setImageSrc] = useState<string>(fallbackSrc || src);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      const isLoading = fallbackSrc && imageSrc === fallbackSrc;
      setImageSrc(src);
      setLoading(!!isLoading);
    };
  }, [fallbackSrc, imageSrc, src]);

  useEffect(() => {
    if (!loading && isLoaded) isLoaded();
  }, [isLoaded, loading]);

  return (
    <Wrapper>
      <BackgroundImage
        isLoading={!!loading}
        src={imageSrc}
        alt="background image"
      />
    </Wrapper>
  );
};
