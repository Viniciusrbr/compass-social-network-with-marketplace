import styled from "styled-components";


export const Backdrop = styled.div` 
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.75);
`;

export const Container = styled.div`
h1{
    margin-bottom: 1.5rem;
}

position: fixed;
top: 50%;
left: 50%;
z-index: 30;
transform: translate(-50%, -50%);

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

width: 31.25rem;
padding: 1.5rem;

border-radius: 1rem;
border: 2px solid var(--gray-gray-600, #2E2F36);
background-color: ${props => props.theme["gray-700"]};
`

export const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;
gap: 1.5rem;
`

export const FormGroup = styled.div`
display: flex;
padding: 1.1875rem 1.5rem;
border-radius: 2.875rem;
border: 2px solid ${props => props.theme["white"]};

input {
    color: ${props => props.theme["white"]};
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
}

img{
width: 1.5rem;
height: 1.5rem;

}
`

export const CancelButton = styled.button`
border-radius: 2.875rem;
background: var(--gradient-background, linear-gradient(180deg, #2E2F36 0%, #17181C 100%));
`