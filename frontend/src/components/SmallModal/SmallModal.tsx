import React from "react";
import { ModalContainer } from "./style";
import { BiTrash } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";

type Props = {
  question: string;
  type: string;
  closeModal: () => void;
};

function SmallModal({ question, type, closeModal }: Props) {
  return (
    <ModalContainer>
      <div className="div-question">
        <h4>{question}</h4>
      </div>
      <div className="div-btn">
        <button className="btn-rm">
          <BiTrash className="icon" />
          {type === "files" || type === "account" ? "Delete" : "Remove"}
        </button>
        <button onClick={closeModal} className="btn-cancel">
          <MdOutlineCancel className="icon" />
          Cancel
        </button>
      </div>
    </ModalContainer>
  );
}

export default SmallModal;
