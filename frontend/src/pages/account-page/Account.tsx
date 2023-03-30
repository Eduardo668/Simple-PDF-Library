import React from "react";
import Header from "../../components/Header/Header";
import { AccountPage } from "./style";
import { BiDownload } from "react-icons/bi";
import { MdLogout} from "react-icons/md";
import { BiTrash } from "react-icons/bi";
import {
    AiOutlineEdit
  } from "react-icons/ai";
import Input from "../../components/Input/Input";

function Account() {
  return (
    <>
      <Header />
      <AccountPage>
        <div className="div-account">
          <div className="div-title">
            <h1>My Account</h1>
          </div>
          <div className="div-download">
            <BiDownload size={"100px"} />
            <h4>1234 downloaded files</h4>
          </div>
          <div className="div-form">
            <Input
              label="Email"
              type="email"
              placeholder="example@email.com"
              width="275px"
              height="30px"
              margin="5px"
            />
            <Input
              label="Username"
              type="text"
              placeholder="John123"
              width="275px"
              height="30px"
              margin="5px"
            />
            <Input
              label="Password"
              type="password"
              placeholder="*********"
              width="275px"
              height="30px"
              margin="5px"
            />
          </div>
          <div className="div-btn" > 
                <button className="btn-edit" > <AiOutlineEdit className="icon" /> Edit</button>
                <button className="btn-logout"><MdLogout className="icon" /> Logout</button>
                <button className="btn-delete" ><BiTrash className="icon" />Delete Account</button>
          </div>
        </div>
      </AccountPage>
    </>
  );
}

export default Account;
