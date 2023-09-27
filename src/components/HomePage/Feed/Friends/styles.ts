import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1.5rem;
    width: 17rem;
    height: 100%;

    padding: 1.5rem 1.25rem;
    border-radius: 1rem;
    border: 2px solid var(--gray-gray-600, #2E2F36);
    background-color: ${props => props.theme["gray-700"]};


    div{
        font-family: Inter;
        font-size: 1rem;
        font-weight: 400;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    ul{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        list-style: none;

        li{
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
        }

        a{
            border: none;
            background-color: transparent;
            cursor: pointer;

            font-family: 'Poppins', sans-serif;
            font-size: 0.875rem;
            font-weight: 400;
            color: ${props => props.theme["white"]};

            display: flex;
            gap: 1rem;
            align-items: center;  
            text-decoration: none;
        }

        img{
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
        }

    }

    @media (max-width: 690px){
        display: none;
    }
`;