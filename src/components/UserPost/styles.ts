import styled from "styled-components";

export const Container = styled.div`
 margin-top: 2rem;
  width: 100%;
  background-color: ${props => props.theme["gray-700"]};
  display: flex;
  flex-direction: column;
  gap: 1rem;

  border-radius: 1rem;
  border: 2px solid${props => props.theme["gray-600"]};

  .post-options{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.625rem 3rem;

    font-family: Inter;
    font-size: 0.75rem;
    font-weight: 400;

    p{
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    span{
      padding: 0.125rem 0.375rem;
      align-items: flex-start;

      border-radius: 1rem;
      background: ${props => props.theme["gray-200"]};
    }
  }

  .post-add-comment{
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0rem 1rem;

    img{
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
    }

    .input-section{
      display: flex;
      justify-content: space-between;
      width: 100%;
      border: none;
      background-color: ${props => props.theme["gray-600"]};
      padding: 0.5rem 1.5rem;
      border-radius: 2.875rem;

      .icons{
        display: flex;
        align-items: center;
        gap: 1rem;

        img{
          width: 1rem;
          height: 1rem;
        }
      }
      
    input {
      color: ${props => props.theme["white"]};
      background-color: transparent;
      border: none;
      outline: none;
      width: 100%;

      font-size: 0.875rem;
      font-weight: 400;
      }

      @media (max-width: 465px) {
      flex-direction: column;
      gap: 0.38rem;
    }
    }
  }
`;

export const PostHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
`;

export const PostHeaderContent = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    padding: 1rem 1rem 0rem 1rem;

    .clock{
      width: 0.75rem;
      height: 0.75rem;
    }

    .profileImg{
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
    }
 
    h1{
      font-size: 0.875rem;
      font-style: normal;
      font-weight: bold;
    }

    p{
      display: flex;
      align-items: center;
      gap: 0.38rem;
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 400;
    }
`;

export const PostContent = styled.p`
  color: #FFF;
  font-family: Poppins;
  font-size: 0.75rem;
  font-weight: 400;
  padding: 0rem 1rem;
`;

export const PostImage = styled.img`
  align-self: center;
  width: 100%;
  height: 50%;
`;

export const TimePost = styled.p`
  color: ${props => props.theme["gray-300"]};
  font-weight: 400;
`
export const LocalPost = styled.p`
font-weight: 500;
`
export const CommentsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0rem 1rem  1rem 1rem;
  h3{
    color: #FFF;
    font-family: Poppins;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  div{
    display: flex;
    gap: 1rem;

    img{
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
    }

    p{
      font-size: 0.75rem;
      font-weight: 400;
    }

    span{
      font-weight: bold;
    }
  }
`
