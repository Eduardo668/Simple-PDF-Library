import styled from "styled-components";
import "@fontsource/poppins/700.css";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 90px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  .div-title {
    height: 100%;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 50px;
    }
    h1 {
      font-family: "Poppins";
      font-size: 1.1em;
      color: black;
    }
  }
  .navbar {
    width: 600px;
    height: 100%;
    /* border: 2px solid red; */
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media (max-width: 700px) {
      display: none;
    }
    .item {
      text-decoration: none;
      color: black;
      font-family: "Poppins";
      display: flex;
      justify-content: space-between;
      .icon {
        margin-right: 5px;
        margin-top: 2px;
      }
    }
  }

  .div-burger-menu {
    z-index: 1000;
    display: none;
    /* border: 2px solid red; */
    justify-content: center;
    align-items: center;
    width: 150px;
    @media (max-width: 700px) {
      display: flex;
    }
    .burger-btn {
      background-color: transparent;
      border: transparent;
      width: 60px;
      height: 60px;
      outline: none;
      -webkit-tap-highlight-color: transparent;
      cursor: pointer;
      .btn-icon {
        transition: 1s;
      }
    }
  }
  .div-sign {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    /* flex-direction: column; */
    width: 340px;
    height: 100%;
    /* border: 2px solid red; */
    @media (max-width: 530px) {
      flex-direction: column;
      width: 200px;
    }
  }
`;
export const ButtonNavbar = styled.button`
  width: ${(props) => props.theme.width};
  height: ${(props) => props.theme.height};
  font-size: ${(props) => props.theme.font};
  border-radius: 10px;
  border: transparent;
  background-color: var(--maincolor);
  font-family: "Poppins";
  cursor: pointer;
  .icon {
    margin-right: 10px;
  }
  :hover {
    transition: 0.5s;
    background-color: #6a75cc;
  }
  /* display: flex;
    justify-content: space-evenly;
    align-items:center; */
`;

export const MenuContainer = styled.div`
  width: 300px;
  transition: 1s;
  height: 100vh;
  background-color: #6a75cc;
  position: absolute;
  /* border-left: 2px solid black; */
  right: 0;
  display: ${(props) => props.theme.display};
  flex-direction: column;
  .empty-space {
    height: 117px;
  }
  .navbar-menu {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 500px;
    /* border: 2px solid orange; */
    /* justify-content:; */
  }
  .div-item {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 2px solid red; */
    .item {
      text-decoration: none;
      color: white;
      font-family: "Poppins";
      display: flex;
      justify-content: space-between;
      font-size: 1.6em;
      .icon {
        margin-right: 8px;
        margin-top: 2px;
      }
    }
  }
`;
