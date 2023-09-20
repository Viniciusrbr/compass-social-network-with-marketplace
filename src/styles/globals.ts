import { createGlobalStyle } from "styled-components";

/*
font-family: 'Inter', sans-serif;
font-family: 'Nunito', sans-serif;
font-family: 'Poppins', sans-serif;
*/

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Poppins', sans-serif;
    background: ${props => props.theme["gray-900"]};
    color: ${props => props.theme.white};
}

`;