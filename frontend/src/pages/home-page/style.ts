import styled from "styled-components";


export const HomePage = styled.div`
    width: 100%;
    height: 80vh;
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    .div-search{
        width: 800px;
        height: 30%;
        /* border:2px solid red; */
        @media (max-width:800px){
            width: 100%;
        }
        
        .div-title{
            width: 100%;
            height: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            /* border: 2px solid blue; */
            h1{
                font-family: "Poppins";
                @media (max-width:700px){
                    font-size: 1.5em;

                }
                @media (max-width:460px){
                    font-size: 1.1em;

                }
            }
        }
        .div-input{
            width: 100%;
            height: 50%;
            display:flex;
            justify-content: center;
            align-items: center;
            /* border: 2px solid purple; */
            
            input{
                width: 614px;
                height: 44px;
                background: #FFFEFE;
                border-radius: 10px;
                border: transparent;
                padding-left: 20px;
                outline: none;
                font-family: "Poppins";
                font-size: 1em;
                @media(max-width:614px){
                    width: 70%;
                   
                }
            }
            button{
                height: 44px;
                width: 50px;
                margin-left:10px;
                background-color: white;
                border: transparent;
                border-radius:10px;
                cursor: pointer;
                :hover{
                    background-color: #f5f7f8;
                }
            }
        }
    }

    .div-files{
        width: 800px;
        height: 70%;
        /* border: 2px solid yellow; */
        overflow-y:auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        @media (max-width:800px){
            width: 100%;
        }
        .div-cards{
            height: auto;
            @media (max-width:551px){
                width: 100%;
                /* border-radius: 0px; */
            }
        }
    }


`