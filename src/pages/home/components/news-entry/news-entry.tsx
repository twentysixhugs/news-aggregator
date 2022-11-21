import { useState } from "react";
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

  let view;

  if (shouldRenderImagePlaceholder) {
    view = <ImagePlaceholder>No image</ImagePlaceholder>;
  }

  if (shouldRenderImageLoader) {
    view = <ImagePlaceholder>Loading</ImagePlaceholder>;
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
      {!shouldRenderImagePlaceholder && (
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
      {view}
    </ContentContainer>
  );
};
