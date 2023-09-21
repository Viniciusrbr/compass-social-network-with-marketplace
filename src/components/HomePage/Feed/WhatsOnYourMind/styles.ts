import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    width: 48.875rem;
    padding: 1rem;
    background-color: ${props => props.theme["gray-700"]};
    font-family: Poppins;

   .input-area{
    display: flex;
    align-items: center;
    gap: 1rem;

    input{
        font-size: 0.875rem;
        font-weight: 400;

        background-color: ${props => props.theme["gray-600"]};
        width: 100%;
        border: none;
        outline: none;
        border-radius: 2.875rem;
        padding: 0.5rem 1.5rem;
        color: ${props => props.theme["white"]};
    }

    img{
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
    }
   }

   .IconsSection{
        display: flex;
        justify-content: space-between;
        align-items: center;

        div{
            display: flex;
            gap: 1.5rem;
        }

        img{
            width: 1.5rem;
            height: 1.5rem;
        }

        button{
            
            font-size: 1rem;
            font-weight: 600;

            padding: 1rem 1.5rem;
            color: ${props => props.theme["white"]};
            background-color: ${props => props.theme["orange"]};
            border-radius: 2.875rem;
            border: none;
            outline: none;

            cursor: pointer;
        }
    }

`