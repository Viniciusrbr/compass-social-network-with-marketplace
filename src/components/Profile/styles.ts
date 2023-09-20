import styled from "styled-components";

export const Container = styled.div`
  margin: 2.25rem;
  border-radius: 1rem;
  border: 2px solid var(--gray-gray-600, #2E2F36);
  background-color: ${props => props.theme["gray-700"]};
`;

export const UserThumbnail = styled.div`
    height: 25rem;
    width: 100%;    

  .userThumb{
    border-radius: 1rem;
    max-height: 17.5rem;
    width: 100%;
  }

  button{
    color: ${props => props.theme["white"]};
    background-color: ${props => props.theme["orange"]};

    border-radius: 46px;
    border: none;

    padding: 16px 24px;
    cursor: pointer;

    font-size: 1rem;
    font-weight: 600;
  }
  
`;

export const UserThumbnailInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    div{
        color: ${props => props.theme["yellow"]};
    }
`

export const UserContent = styled.div`
  
`;

export const UserInfo = styled.div`
  
`;

export const UserPosts = styled.div`
  
`;