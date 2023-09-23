import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 2.25rem;
    gap: 2.25rem;

    .mainFeed{
        width: 100%;
        height: 100%;
    }

    @media (max-width: 440px){
        padding: 1rem;
        width: 100vw;
    }
`;