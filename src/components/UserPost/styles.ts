import styled from "styled-components";

export const Container = styled.div`
 margin-top: 2rem;
  width: 100%;
  background-color: ${props => props.theme["gray-700"]};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;

  border-radius: 1rem;
  border: 2px solid var(--gray-gray-600, #2E2F36);

  .post-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .user-info{
      display: flex;
      gap: 1rem;
      align-items: center;
    }
    h1{
      font-size: 0.875rem;
      font-style: normal;
      font-weight: bold;
    }

    p{
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 400;
    }

    img{
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
    }
    
  }

  .post-options{
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-family: Inter;
    font-size: 0.75rem;
    font-weight: 400;

    p{
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }

  .post-add-comment{
    display: flex;
    align-items: center;
    gap: 1rem;

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
    }
  }
`;

export const PostContent = styled.p`
  color: #FFF;
  font-family: Poppins;
  font-size: 0.75rem;
  font-weight: 400;
`;