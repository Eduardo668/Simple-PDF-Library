import React, { PropsWithRef } from "react";
import Input from "../Input/Input";
import { ModalContainer } from "./style";
import {  AiOutlineUpload } from "react-icons/ai";
import {  MdOutlineCancel} from "react-icons/md";

type Props = {
    closeModal:()=>void;
    type: string;
}

function ModalForm({closeModal, type}:Props) {
  return (
    <ModalContainer>
      <div className="div-title">
        <h1>{type} PDF</h1>
      </div>
      <div className="div-form">
        <Input
          label="Title"
          font_label="1.1em"
          font_input="1.1em"
          type="text"
          width="280px"
          height="35px"
          placeholder="Harry Potter..."
        />
        <Input
          label="Pages"
          font_label="1.1em"
          font_input="1.1em"
          type="number"
          width="100px"
          height="35px"

        />
        <Input
          label="File"
          file_type=".pdf"
          font_label="1.1em"
          font_input="1.1em"
          type="file"
          width="280px"
          height="40px"
          padding_top="10px"

        />
      </div>
      <div className="div-btn">
            <button><AiOutlineUpload className="icon" size={"20px"} />{ type === 'Add' ? "Publish" : "Edit" }</button>
            <button onClick={closeModal} ><MdOutlineCancel className="icon" size={"20px"} />Cancel</button>
      </div>
    </ModalContainer>
  );
}

export default ModalForm;
