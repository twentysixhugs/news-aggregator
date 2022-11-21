import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-flow: column;
  padding-inline: 170px;

  @media (max-width: 850px) {
    align-items: center;
    padding-inline: 50px;
  }

  @media (max-width: 500px) {
    padding-inline: 10px;
  }
`;

export const LayoutHeader = styled.h1`
  margin-top: 70px;
  font-size: 3rem;
  font-weight: bold;

  color: #ff8d64;

  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;
