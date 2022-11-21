import { useState } from "react";
import { useMediaQuery } from "src/shared/hooks/useMediaQuery";
import { getPrettyDate } from "src/shared/utils";
import {
  ContentContainer,
  Description,
  Image,
  ImageCropContainer,
  ImagePlaceholder,
  Information,
  TextContainer,
  Title,
} from "./news-entry.styles";
import { NewsEntryProps } from "./news-entry.types";

export const NewsEntry = ({
  author,
  description,
  imgUrl,
  publishedAt,
  title,
  url,
}: NewsEntryProps) => {
  const [shouldRenderImagePlaceholder, setShouldRenderImagePlaceholder] =
    useState(false);

  const [shouldRenderImageLoader, setShouldRenderImageLoader] = useState(true);

  const smallScreenQuery = useMediaQuery("(max-width: 650px)");

  let imageView;

  if (shouldRenderImagePlaceholder) {
    imageView = <ImagePlaceholder>No image</ImagePlaceholder>;
  }

  if (shouldRenderImageLoader && !shouldRenderImagePlaceholder) {
    imageView = <ImagePlaceholder>Loading</ImagePlaceholder>;
  }

  if (smallScreenQuery.matches) {
    imageView = null;
  }

  const handleImageLoadError = () => {
    setShouldRenderImagePlaceholder(true);
    setShouldRenderImageLoader(false);
  };

  const handleImageLoad = () => {
    setShouldRenderImageLoader(false);
  };

  return (
    <ContentContainer>
      <TextContainer>
        <Title href={url} target="_blank" rel="noreferrer">
          {title}
        </Title>
        <Description>{description}</Description>
        <Information>
          by {author}, {getPrettyDate(publishedAt)}
        </Information>
      </TextContainer>
      {!shouldRenderImagePlaceholder && !smallScreenQuery.matches && (
        <ImageCropContainer>
          <Image
            src={imgUrl}
            onError={handleImageLoadError}
            onLoad={handleImageLoad}
            style={{
              display: shouldRenderImageLoader ? "none" : "inline-block",
            }}
          />
        </ImageCropContainer>
      )}
      {imageView}
    </ContentContainer>
  );
};
