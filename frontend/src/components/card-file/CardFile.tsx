import React, { useEffect, useState } from "react";
import { CardContainer } from "./style";
import CapaTest from "../../assets/capa.jpg";
import { BsDownload } from "react-icons/bs";
import {
  AiOutlineRead,
  AiOutlineStar,
  AiFillStar,
  AiOutlineEdit,
} from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import Aos from "aos";

type Props = {
  type?: string;
  height: string;
  openEditModal?: () => void;
  openSmallModal?: () => void;
};

function CardFile({ type, height, openEditModal, openSmallModal }: Props) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const favorite = () => {
    setIsFavorite(true);
  };
  const unFavorite = () => {
    setIsFavorite(false);
  };
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  return (
    <CardContainer data-aos="fade-up" theme={{ height: height }}>
      <div className="div-image">
        <img src={CapaTest} alt="" />
      </div>
      <div className="div-content">
        <div className="div-title">
          <h5>Harry Potter e a pedra filosofal</h5>
        </div>
        <div className="div-data">
          <p>1 download - 300 pages - 12.2 MB - 1998</p>
        </div>
        <div
          className={
            type === "home"
              ? "div-btn-small div-btn"
              : type === "myfiles"
              ? "div-btn-tall div-btn"
              : type === "myfavorite"
              ? "div-btn-small div-btn"
              : ""
          }
        >
          <button>
            <AiOutlineRead size={"15px"} className="icon" />
            Read
          </button>
          <button>
            <BsDownload className="icon" /> Download
          </button>

          {type === "home" ? (
            <button
              onClick={isFavorite ? () => unFavorite() : () => favorite()}
            >
              {" "}
              {isFavorite ? (
                <AiFillStar className="icon" />
              ) : (
                <AiOutlineStar className="icon" />
              )}{" "}
              Favorite
            </button>
          ) : null}
          {type === "myfiles" ? (
            <>
              <button onClick={openEditModal}>
                <AiOutlineEdit className="icon" /> Edit
              </button>
              <button onClick={openSmallModal} className="btn-rm">
                <BiTrash className="icon" /> Delete
              </button>
            </>
          ) : null}
          {type === "myfavorite" ? (
            <button onClick={openSmallModal} className="btn-rm">
              <BiTrash className="icon" /> Remove
            </button>
          ) : null}
        </div>
      </div>
    </CardContainer>
  );
}

export default CardFile;
