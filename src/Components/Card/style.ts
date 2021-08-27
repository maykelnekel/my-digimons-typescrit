import styled from "styled-components";

export const CardContainer = styled.div`
  border-radius: 5px;
  width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 4px solid tomato;
  margin: 1rem;
  padding: 1rem;
  word-break: break-all;
`;
export const Name = styled.h1`
  text-transform: uppercase;
  color: tomato;
  font-size: larger;
`;
export const Image = styled.img`
  width: 50%;
  border-radius: 50%;
  border: 4px solid tomato;
`;
export const Level = styled.h3`
  color: tomato;
  font-size: large;
  span {
    text-decoration: underline;
  }
`;
