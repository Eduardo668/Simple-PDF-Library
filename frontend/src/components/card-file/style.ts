import styled from "styled-components";


export const CardContainer = styled.div`
    display: flex;
    width: 551px;
    /* height: 145px; */
    height: ${props => props.theme.height};
    border-radius: 20px;
    background-color: white;
    margin: 20px;
    justify-content: flex-start;
    align-items: flex-start;

    @media (max-width:551px){
        width: 100%;
        /* margin:0px 0px 5px 0px; */
        margin: 0;
        height: 170px;
        border-bottom: 1px solid ;
        border-radius: 0px;
    }

    .div-image{
        width: 22%;
        height: 100%;
        overflow-y:hidden;
        /* border: 2px solid red; */
        @media (max-width:551px){
            width: 30%;
        }
        img{
            object-fit: cover;
            height: 100%;
            width: 113px;
            border-radius: 20px 0px 0px 20px;
            @media (max-width:551px){
                border-radius: 0px;
            }
            
        }
    }
    .div-content{
        display: flex;
        flex-direction: column;
        /* border: 2px solid; */
        width: 100%;
        height: 100%;
        .div-title{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            height: 70%;
            /* border: 1px solid red; */
            padding-left:20px;
            h5{
                font-family: "Poppins";
            }
            
        }
        .div-data{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            height: 40%;
            /* border: 1px solid red; */
            padding-left:20px;
            p{
                font-family: "Poppins";
                color: #6A75CC;
                font-weight: 600;
                font-size: 0.8em;
            }
        }
        .div-btn-small{
            width: 100%;
        }
        .div-btn-tall{
            width: 280px;
        }
        .div-btn{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            height: 100%;
            /* border: 1px solid red; */
            padding-left:20px;
            flex-wrap:wrap;
            button{
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                width: 125px;
                height: 30px;
                background: var(--maincolor);
                border-radius: 10px;
                border: transparent;
                font-family: "Poppins";
                margin-left:10px;
                font-size: 1em;
                :hover{
                    background-color: #6A75CC;
                    transition: 0.5s;
                }
                .icon{
                    margin-right: 5px;
                    /* margin-top: 3px; */
                }
                

            }
            .btn-rm{
                background-color:#E82828;
                color: white;
                :hover{
                    background-color: #6F1F1F;
                    transition: 0.5s;
                    
                }
            }
            
        }
    }

`
