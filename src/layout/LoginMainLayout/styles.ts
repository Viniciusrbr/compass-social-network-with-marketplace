import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  background: var(--gradient-background, linear-gradient(180deg, #2E2F36 0%, #17181C 100%));

  img{
    height: 100vh;
  }

  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    background-color: blue;
  }
`;