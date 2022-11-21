import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex: 0.7;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 16px;

  padding: 2rem;
  width: 50%;

  @media (max-width: 1050px) {
    width: 100%;
  }

  background: #2d3133;
  border-radius: 8px;
`;

export const ErrorDescription = styled.div`
  font-size: 1.2rem;
  color: #fff;
`;

export const StyledButton = styled.button`
  width: max-content;
  padding: 1rem;

  font-size: 1.2rem;

  background: #ff8d64;
  color: #000;
  border-radius: 8px;

  cursor: pointer;
`;
