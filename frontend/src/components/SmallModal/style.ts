import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 325px;
  height: 137px;
  background: #ffffff;
  border-radius: 10px;
  .div-question {
    width: 80%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid; */
    h4 {
      font-family: "Poppins";
    }
  }
  .div-btn {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 40%;
    /* border: 1px solid red; */
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 104px;
      height: 27px;
      border-radius: 10px;
      border: transparent;
      color: white;
      font-family: "Poppins";
      cursor: pointer;
      .icon {
        margin-bottom: 3px;
        margin-right: 3px;
      }
    }
    .btn-rm {
      background: #e82828;
      :hover {
        background-color: #6f1f1f;
        transition: 0.5s;
      }
    }
    .btn-cancel {
      background: #6a75cc;
      :hover {
        background-color:  #72439c ;
        transition: 0.5s;
      }
    }
  }
`;
