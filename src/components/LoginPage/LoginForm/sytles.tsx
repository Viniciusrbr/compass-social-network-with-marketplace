import styled from "styled-components";

export const FormWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
   
    background: var(--gradient-background, linear-gradient(180deg, #2E2F36 0%, #17181C 100%));
    gap: 24px;
`;

export const FormTexts = styled.div`
    width: 25.375rem;
    display: flex;
    flex-direction: column;
    gap: 24px;
    
    h1 {
        font-weight: 500;
        font-size: 4rem;
    }
    p{
        font-weight: 400;
        font-size: 1rem;   
    }

    h2{
        font-weight: 400;
        font-size: 2rem; 
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 25.375rem;
    gap: 24px;

    .wrong-message{
    color: yellow;
    text-align: center;
  }
`;

export const FormGroup = styled.div<{ wrong?: boolean }>`
    display: flex;
    justify-content: space-between;
    width: 25.375rem;
    border: none;
    background-color: transparent;
    padding: 19px 24px;
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

    &.icon {
        filter: invert(1); 
    }
`

export const SubmitButton = styled.button`
    color: ${props => props.theme["white"]};
    background-color: ${props => props.theme["orange"]};

    border-radius: 46px;
    border: 1px solid var(--orange, #FE2E05);

    padding: 16px 24px;
    cursor: pointer;

    font-weight: 600;
`;

export const RegisterText = styled.p`
    width: 25.375rem;
    text-align: center;
    a{
        color: ${props => props.theme["white"]};
        text-decoration: none;
        font-weight: 600;
    }
`;

