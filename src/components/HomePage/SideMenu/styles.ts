import styled from "styled-components";

export const SideMenuSection = styled.aside`
    display: none;
    width: 21.875rem;
    padding: 2.625rem 0.625rem;
    flex-direction: column;
    align-items: center;
    border: 2px solid ${props => props.theme["gray-600"]};
    background: ${props => props.theme["gray-700"]};

    transform: translateX(-100%);
    transition: transform 0.5s ease;

  &.open {
    display: flex;
    align-self: stretch;
    transform: translateX(0);
  }

    img{
        width: 15rem;
    }

    ul{
        text-align: center;
        list-style-type: none;
        width: 15rem;
        border-radius: 0.5rem;
        border: 2px solid var(--gray-gray-600, #2E2F36);
    }
    li{
        padding: 0.75rem 1.5rem;
        

        &:hover{
            background: ${props => props.theme["orange"]};
        }
    }
    li a{
        text-decoration: none;
        color: ${props => props.theme["white"]};

        &:hover{
            color: ${props => props.theme.black};
        }
    }

    
    @media(max-width: 768px){
        display: flex;
        position: fixed;
        z-index: 999;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        background: ${props => props.theme["gray-700"]};
        overflow-y: auto;
        transform: translateX(-100%);
        transition: transform 0.5s ease;
        &.open {
            transform: translateX(0);
        }
    }
`
