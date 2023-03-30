import styled from "styled-components";

export const AccountPage = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    /* border: 2px solid; */
 
    width: 100%;
    height: 84vh;
    .div-account{
        display: flex;
        flex-direction:column;
        border-radius:10px;
        width: 350px;
        height: 500px;
        background-color: white;
        /* margin-left:50px; */
        .div-title{
            display: flex;
            justify-content: center;
            align-items:center;
            width: 100%;
            height: 90px;
            /* border: 2px solid red; */
            h1{
                font-family:"Poppins";
                
            }
        }
        .div-download{
            width: 100%;
            height: 30%;
            /* border: 2px solid yellow; */
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction:column;
            h4{
                font-family:"Poppins";
                overflow-y:hidden;
            }
        }
        .div-form{
            width: 100%;
            height: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            /* border: 2px solid purple; */
        }
        .div-btn{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            flex-direction: column;
            width: 100%;
            /* border: 1px solid red; */
            height: 30%;
            .btn-edit{
                width: 100px;
                background-color:var(--maincolor);
            }
            .btn-logout{
                width: 97px;
                color: white;
                background-color:#6A75CC;
            }
             .btn-delete{
                width: 160px;
                color: white;
                background-color:#E82828;
            }
            button{
                height: 29px;
                font-family:"Poppins";
                display: flex;
                justify-content: center;
                align-items: center;
                border: transparent;
                border-radius: 10px;
                cursor: pointer;
                .icon{
                    margin-right:5px;
                }
            }
        }
    }

`