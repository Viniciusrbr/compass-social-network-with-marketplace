import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-height: 61.376rem;
   
    background: var(--gradient-background, linear-gradient(180deg, #2E2F36 0%, #17181C 100%));
    gap: 1.2rem;

    @media (max-width: 910px) {

    }
`;

export const FormTexts = styled.div`
    width: 25.375rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    
    h1 {
        font-weight: 500;
        font-size: 3rem;
    }
    p{
        font-weight: 400;
        font-size: 0.9rem;   
    }

    h2{
        font-weight: 400;
        font-size: 1.5rem; 
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 25.375rem;
    gap: 1.5rem;

    .wrong-message{
    color: yellow;
    text-align: center;
  }
`;

export const FormGroup = styled.div<{ wrong?: boolean }>`
    display: flex;
    justify-content: space-between;
    border: none;
    background-color: transparent;
    padding: 1rem;
    border-radius: 46px;
    border: 2px solid var(--white, #F5F5F5);
    
  input {
    color: ${props => props.theme["white"]};
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
  }

 border-color: ${(props) => (props.wrong ? "yellow" : "")};
`;

export const LoginIcons = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    padding: 0.1875rem;
`

export const RegisterText = styled.p`
    width: 25.375rem;
    text-align: center;
    a{
        color: ${props => props.theme["white"]};
        text-decoration: none;
        font-weight: 600;
    }
`;

