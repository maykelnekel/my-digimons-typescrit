import styled from "styled-components";

export const ButtonComponent = styled.button`
  width: 200px;
  height: 40px;
  background-color: tomato;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 2px;
  border: none;
  :hover {
    background-color: white;
    color: tomato;
    cursor: pointer;
  }
`;
