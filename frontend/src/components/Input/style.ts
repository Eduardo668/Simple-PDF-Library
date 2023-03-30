import styled from "styled-components";

export const InputContainer = styled.div`
    display:flex;
    flex-direction: column;
    /* border: 2px solid red; */
    align-items: flex-start;
    margin: ${props => props.theme.margin};
    
    input{
        display: flex;
        justify-content:center;
        align-items: center;
        width: ${props => props.theme.width};
        height: ${props => props.theme.height};
        background: var(--maincolor);
        border-radius: 10px;
        border: transparent;
        padding-left: 20px;
        padding-top:${props => props.theme.padding_top};
        outline: none;
        font-family: "Poppins";
        font-size: ${props => props.theme.font_label};
        font-weight: 500;
    }
    label{
        font-family: "Poppins";
        font-weight: 700;
        overflow-y:hidden;
        font-size: ${props => props.theme.font_label};
    }
    
`