import { getPrettyDate } from "src/shared/utils";
import {
  ContentContainer,
  Description,
  Image,
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
  return (
    <ContentContainer>
      <TextContainer>
        <Title href={url}>{title}</Title>
        <Description>{description}</Description>
        <Information>
          by {author}, {getPrettyDate(publishedAt)}
        </Information>
      </TextContainer>
      <Image src={imgUrl} />
    </ContentContainer>
  );
};
