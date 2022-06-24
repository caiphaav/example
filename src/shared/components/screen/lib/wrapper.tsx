import styled from "styled-components";

export const Wrapper = styled.div(
  ({ theme }) => `   
    width: 100vw;
    display: flex;   
    flex-direction: column;
    align-items: center;  
    background: ${theme.palette.secondary}; 
`
);
