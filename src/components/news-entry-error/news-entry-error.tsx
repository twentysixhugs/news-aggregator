import {
  ContentContainer,
  ErrorDescription,
  StyledButton,
  Wrapper,
} from "./news-entry-error.styles";
import { NewsEntryErrorProps } from "./news-entry-error.types";

export const NewsEntryError = ({ text, onTryAgain }: NewsEntryErrorProps) => {
  return (
    <Wrapper>
      <ContentContainer>
        <ErrorDescription>{text}</ErrorDescription>
        <StyledButton onClick={onTryAgain}>Try again</StyledButton>
      </ContentContainer>
    </Wrapper>
  );
};
