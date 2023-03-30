import React from "react";
import { HomePage } from "./style";
import Header from "../../components/Header/Header";
import { AiOutlineSearch } from "react-icons/ai";
import CardFile from "../../components/card-file/CardFile";

function Home() {
  return (
    <>
      <Header />
      <HomePage>
        <div className="div-search">
          <div className="div-title">
            <h1>Search a PDF for read or download </h1>
          </div>
          <div className="div-input">
            <input placeholder="Example: Harry Potter 1 Book" type="text" />
            <button>
              <AiOutlineSearch size={"25px"} />
            </button>
          </div>
        </div>
        <div className="div-files">
          <div className="div-cards">
            <CardFile height="145px" type="home" />
            <CardFile height="145px" type="home" />
            <CardFile height="145px" type="home" />
            <CardFile height="145px" type="home" />
            <CardFile height="145px" type="home" />
          </div>
        </div>
      </HomePage>
    </>
  );
}

export default Home;
