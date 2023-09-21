import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1.5rem;


    padding: 1.5rem 1.25rem;
    width: 17rem;
    border-radius: 1rem;
    border: 2px solid var(--gray-gray-600, #2E2F36);
    background-color: ${props => props.theme["gray-700"]};


    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    ul{
        display: flex;
        flex-direction: column;
        gap: 1rem;

        li{
        display: flex;
        gap: 1rem;
        align-items: center;    
        }

        list-style: none;
        img{
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
        }
    }
`;