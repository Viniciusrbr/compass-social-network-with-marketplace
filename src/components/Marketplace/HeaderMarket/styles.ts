import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;

    p{
        font-size: 0.875rem;
        font-weight: 700;
        font-family: 'Inter', sans-serif;
        color: var(--gray-gray-300, #75767D);
    }

    div{
        display: flex;
        align-items: center;
        justify-content:center;
        gap: 4rem;

        @media(max-width: 941px){
            flex-direction: column;
            gap: 0.5rem;
        }
    }
`;