import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;

  border-bottom: 1px solid rgba(255, 141, 100, 0.13);
`;

export const TextContainer = styled.div`
  display: flex;
  flex-flow: column;
`;

export const Title = styled.a`
  font-size: 1.2rem;
  font-weight: bold;
  color: #ff8d64;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #fff;
`;

export const Information = styled.span`
  color: #dbdbdb;
  font-size: 0.8rem;
`;

export const Image = styled.img`
  height: 80px;
  border-radius: 2px;
`;
