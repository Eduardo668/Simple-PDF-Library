import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HeaderContainer, MenuContainer } from "./style";
import {
  AiOutlineHome,
  AiOutlineFilePdf,
  AiOutlineUser,
  AiOutlineUpload,
} from "react-icons/ai";
import { ButtonNavbar } from "./style";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import Logo from "../../assets/pdf.png";

import Aos from "aos";
import { BackgroundModal } from "../../global/GlobalStyles";
import ModalForm from "../modal-form/ModalForm";

function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openMenu = () => {
    setIsOpenMenu(true);
  };
  const closeMenu = () => {
    setIsOpenMenu(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <HeaderContainer>
      <div className="div-title">
        <img src={Logo} />
        <h1>Simple PDF Library</h1>
      </div>
      {/* <div className="div-sign">
        <ButtonNavbar onClick={()=>navigate("/login")} theme={{width:"126px",height:"40px", font:"1.2em"}} >Sign In</ButtonNavbar>
        <ButtonNavbar onClick={()=>navigate("/register")} theme={{width:"126px",height:"40px", font:"1.2em"}} >Sign Up</ButtonNavbar>
      </div> */}
      <div className="navbar">
        <Link className="item" to={"/"}>
          <AiOutlineHome className="icon" />
          Home
        </Link>
        <Link className="item" to={"/myfiles"}>
          <AiOutlineFilePdf className="icon" /> My Files
        </Link>
        <Link className="item" to={"/account"}>
          <AiOutlineUser className="icon" /> Account
        </Link>
        <ButtonNavbar
          onClick={openModal}
          theme={{ width: "126px", height: "29px" }}
        >
          <AiOutlineUpload className="icon" />
          Add a PDF
        </ButtonNavbar>
      </div>
      <div className="div-burger-menu">
        <button
          onClick={isOpenMenu ? () => closeMenu() : () => openMenu()}
          className="burger-btn"
        >
          {isOpenMenu ? (
            <TfiClose className="btn-icon" size={"35px"} />
          ) : (
            <RxHamburgerMenu className="btn-icon" size={"45px"} />
          )}{" "}
        </button>
      </div>

      <MenuContainer
        data-aos="fade-left"
        theme={{ display: isOpenMenu ? "flex" : "none" }}
      >
        <div className="empty-space"></div>
        <div className="navbar-menu">
          <div className="div-item">
            <Link className="item" to={"/"}>
              <AiOutlineHome size={"30px"} className="icon" />
              Home
            </Link>
          </div>
          <div className="div-item">
            <Link className="item" to={"/myfiles"}>
              <AiOutlineFilePdf size={"30px"} className="icon" />
              My Files
            </Link>
          </div>
          <div className="div-item">
            <Link className="item" to={"/account"}>
              <AiOutlineUser size={"30px"} className="icon" />
              Account
            </Link>
          </div>
          <div className="div-item">
            <ButtonNavbar
              onClick={()=>{
                closeMenu();
                openModal();
              }}
              theme={{ width: "220px", height: "60px", font: "1.5em" }}
            >
              <AiOutlineUpload size={"30px"} className="icon" />
              Add a PDF
            </ButtonNavbar>
          </div>
        </div>
      </MenuContainer>
      {isModalOpen ? (
        <BackgroundModal>
          <ModalForm type="Add" closeModal={closeModal} />
        </BackgroundModal>
      ) : null}
    </HeaderContainer>
  );
}

export default Header;
