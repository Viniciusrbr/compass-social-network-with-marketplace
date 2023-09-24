import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2.25rem;
  display: flex;
  gap: 3rem;

  @media(max-width: 815px){
    flex-direction: column;
    align-items: center;
  }
`;

export const UserPosts = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const UserPostsOptions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  color: ${props => props.theme["yellow"]};
  font-size: 1.25rem;
  font-weight: 400;

  border-bottom: 1px solid ${props => props.theme["gray-600"]};
  padding-bottom: 2rem;
`