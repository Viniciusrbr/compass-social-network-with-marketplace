import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    height: 25rem;
    width: 100%;    
    background-color: ${props => props.theme["gray-700"]};
    border-radius: 1rem;
    border: 2px solid var(--gray-gray-600, #2E2F36);

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

export const ThumbnailImg = styled.img`
    border-radius: 1rem;
    max-height: 17.5rem;
    width: 100%;
    display: flex;
    align-self: flex-start;
`;

export const UserThumbnailInfo = styled.div`
     display: flex;
    align-items: center;
    justify-content: space-around;


    @media(max-width: 1040px){
      display: flex;
      flex-direction: row-reverse;

      button{
        align-self: flex-end;
      }
    }
`
export const ProfileAndName = styled.div`
  display: flex;
  flex-direction: column;

  color: ${props => props.theme["yellow"]};
  position: relative;

  img{
     position: absolute;
      right: 80%;
      bottom: 90%;
      width: 11.23875rem;
      height: 11.23875rem;
      border-radius: 50%;

      @media(max-width: 500px){
        width: 8.23875rem;
        height: 8.23875rem;

      }

    }
`;