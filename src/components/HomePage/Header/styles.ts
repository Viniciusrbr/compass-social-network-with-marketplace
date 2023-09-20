import styled from "styled-components";

export const HeaderSection = styled.header`
padding: 0rem 1.75rem;
  height: 4.5625rem;
  width: 100%;

  background: ${(props) => props.theme["gray-700"]};

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction:row;

`;

export const OpenMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    button{
        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;
        padding: 0.375rem;
        border-radius: 3.125rem;
        border: 2px solid var(--gray-gray-650, #27282F);
        background: ${props => props.theme["orange"]};
    }
`;

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.62rem;
    
    .userImg{
        width: 2.625rem;
        height: 2.625rem;
        border-radius: 50%;
    }
`;

