import styled from 'styled-components';

export const Container = styled.div`
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

  @media(max-width: 815px){
    width: 100%;
  }

`;