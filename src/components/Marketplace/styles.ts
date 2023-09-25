import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;

  padding: 2.25rem;
  gap: 2.25rem;

  @media(max-width: 941px){
    padding: 1.25rem;
  }
`;

export const ProductContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;

  padding: 0 2.25rem;

  @media(max-width: 941px){
    width: 100%;
    padding: 0;
  }
`;
