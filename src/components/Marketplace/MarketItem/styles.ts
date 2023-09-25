import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 15.9375rem;
    font-family: 'Inter', sans-serif;
    gap: 0.375rem;

    img{
        border-radius: 0.5rem;
        width: 100%;
        height: 15.9375rem;
    }

    h2{
        font-size: 1rem;
        font-weight: 500;
    }

    p{
        font-size: 0.875rem;
        font-weight: 400;
        color: ${props => props.theme["gray-200"]};
    }

    
`
export const Button = styled.button`
    border-radius: 1.5rem;
    border: none;
    padding: 0.25rem 0.75rem;
    width: 50%;

    color: ${props => props.theme["white"]};
    background: ${props => props.theme["gray-200"]};

    font-size: 0.75rem;
    font-weight: 400;
`