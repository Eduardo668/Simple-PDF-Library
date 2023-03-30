import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 382px;
  height: 514px;
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction:column;


    .div-title{
        width: 80%;
        height: 20%;
        /* border: 2px solid red; */
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;

        h1{
            font-family: "Poppins";
            font-size: 1.8em;
        }

    }
    .div-form{
        display: flex;
        justify-content: space-evenly;
        align-items: flex-start;
        flex-direction: column;
        width: 80%;
        height: 60%;
        /* border:2px solid blue; */
    }
    .div-btn{
        width: 100%;
        height: 20%;
        /* border: 2px solid; */
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        button{
            display: flex;
            justify-content: center;
            align-items:center;
            width: 108px;
            height: 36px;
            background-color: var(--maincolor);
            border-radius: 10px;
            border: transparent;
            font-family: "Poppins";
            cursor: pointer;
            :hover{
                transition: 0.5s;
                background-color:#6A75CC;
            }
            .icon{
                margin-right: 5px;
                margin-bottom: 4px;
            }
        }
    }

`;
