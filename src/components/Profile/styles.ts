import styled from "styled-components";

export const Container = styled.div`
  margin: 2.25rem;
`;

export const UserThumbnail = styled.div`
    height: 25rem;
    width: 100%;    
    background-color: ${props => props.theme["gray-700"]};
    border-radius: 1rem;
    border: 2px solid var(--gray-gray-600, #2E2F36);

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
    position: relative;

    div{
        color: ${props => props.theme["yellow"]};
    }

    img{
     position: absolute;

      right: 80%;
      bottom: 90%;
      width: 11.23875rem;
      height: 11.23875rem;
      border-radius: 50%;
    }
`

export const UserContent = styled.div`
  margin-top: 2.25rem;
  display: flex;
  flex-direction: row;
  gap: 3rem;
`;

export const UserInfo = styled.div`
  padding: 1.5rem;
  width:  23rem;
  border-radius: 1rem;
  background-color: ${props => props.theme["gray-700"]};
  
  ul{
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    gap: 1.5rem;
  }

  li{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;

    img{
      width: 1.25rem;
      height: 1.25rem;

    }
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