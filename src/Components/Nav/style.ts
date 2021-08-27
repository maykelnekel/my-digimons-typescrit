import { Link } from "react-router-dom";
import styled from "styled-components";

export const Lista = styled.div`
  background-color: tomato;
  color: white;
  width: 100vw;
  padding: 0;
  display: flex;
  justify-content: center;
  height: 3rem;
  position: fixed;
  bottom: 0;
  text-transform: uppercase;
  font-weight: bold;
  @media (min-width: 1024px) {
    bottom: none;
    top: 0;
  }
`;

export const Menu = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  width: 50%;
  max-width: 300px;
  height: 100%;
  color: white;
  :hover {
    background-color: white;
    color: tomato;
  :visited {
    color: white;
  }
  :visited:hover {
    color: tomato;
  }
`;
