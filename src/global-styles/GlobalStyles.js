import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;

}

:root{
    --black: #191B1F;
    --grey: #2B2E33;
    --white: #fafafa;
    --orange: #F5821F;
}


body{
    background-color: var(--grey);
}
`