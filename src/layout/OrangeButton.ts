import styled from "styled-components";

export const OrangeButton = styled.button`
    color: ${props => props.theme["white"]};
    background-color: ${props => props.theme["orange"]};
    background: var(--gradient-button, linear-gradient(180deg, #AD2D14 0%, #F42E07 100%));

    border-radius: 46px;
    border: 1px solid ${props => props.theme["orange"]};

    padding: 16px 24px;
    cursor: pointer;

    font-weight: 600;
`;