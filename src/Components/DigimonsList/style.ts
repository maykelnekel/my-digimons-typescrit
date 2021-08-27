import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 1400px;
  @media (max-width: 1023px) {
    justify-content: center;
  }
  @media (min-width: 1024px) {
    margin-top: 5rem;
  }
`;
