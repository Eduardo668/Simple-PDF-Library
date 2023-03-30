import styled from "styled-components";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/500.css";

export const LoginPage = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const LoginContainer = styled.div`
    width: 431px;
    height: 543px;
    @media (max-width:431px){
        width: 100%;
        height: 100%;
    }
    box-shadow: 1px 1px 1px 1px gray;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .div-title{
        width:80%;
        /* border:2px solid red; */
        height: 20%;
        display: flex;
        align-items: flex-end;
        h1{
            font-family: "Poppins";
            font-size:2.2em;
        }
        
    }
    .div-form{
        width: 100%;
        height: 45%;
        /* border: 2px solid blue; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @media (max-width:431px){
            height: 30%;
        }
       
    }
    .div-button{
            height: 30%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            /* border: 2px solid purple; */
            button{
                width: 176px;
                height: 64px;
                font-family: "Poppins";
                background: var(--maincolor);
                border: transparent;
                border-radius: 20px;
                font-weight: 700;
                font-size: 1.7em;
                cursor: pointer;
                margin-bottom:15px;
                :hover{
                    background-color: #6A75CC;
                    transition: 0.5s;
                }
            }
            p{
                font-family: "Poppins";

            }
            .sign-up-link{
                text-decoration: none;
                color: black;
                font-family: "Poppins";
                cursor: pointer;
            }
            
        }


`