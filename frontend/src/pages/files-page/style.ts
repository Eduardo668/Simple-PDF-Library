import styled from "styled-components";

export const MyFilesPage = styled.div`
    display: flex;
    width: 100%;
    height: 85vh;
    /* border: 2px solid red; */
    align-items: flex-end;
    @media(max-width:950px){
        flex-wrap:wrap;
    }
    .column{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction:column;
        /* border: 2px solid blue; */
        .title-div{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 20%;
            /* border: 2px solid yellow; */
            h1{
                font-family:"Poppins";
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .icon{
                margin:5px;
            }
        }
        .div-files{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            width: 100%;
            height: 80%;
            /* border: 2px solid purple; */
            .div-cards{
                height: auto;
            }
        }
    }

`