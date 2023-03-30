import React, { useState } from "react";
import CardFile from "../../components/card-file/CardFile";
import Header from "../../components/Header/Header";
import ModalForm from "../../components/modal-form/ModalForm";
import SmallModal from "../../components/SmallModal/SmallModal";
import { BackgroundModal } from "../../global/GlobalStyles";
import { MyFilesPage } from "./style";

function MyFiles() {
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState<boolean>(false);

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };
  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };
  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };
  const openRemoveModal = () => {
    setIsRemoveModalOpen(true);
  };
  const closeRemoveModal = () => {
    setIsRemoveModalOpen(false);
  };

  return (
    <>
      <Header />
      <MyFilesPage>
        <div className="column">
          <div className="title-div">
            <h1>Added by me</h1>
          </div>
          <div className="div-files">
            <div className="div-cards">
              <CardFile
                type="myfiles"
                height="180px"
                openEditModal={openEditModal}
                openSmallModal={openDeleteModal}
              />
            </div>
          </div>
        </div>
        <div className="column">
          <div className="title-div">
            <h1>My favorites</h1>
          </div>
          <div className="div-files">
            <div className="div-cards">
              <CardFile
                type="myfavorite"
                height="145px"
                openSmallModal={openRemoveModal}
              />
            </div>
          </div>
        </div>
        {isEditModalOpen ? (
          <BackgroundModal>
            <ModalForm type="Edit" closeModal={closeEditModal} />
          </BackgroundModal>
        ) : null}
        {isDeleteModalOpen ? (
          <BackgroundModal>
            <SmallModal
              type="files"
              question="Do you really want to remove this file?"
              closeModal={closeDeleteModal}
            />
          </BackgroundModal>
        ) : null}
        {isRemoveModalOpen ? (
          <BackgroundModal>
            <SmallModal
              type="favorite"
              question="Do you really want to remove this file from your favorites?"
              closeModal={closeRemoveModal}
            />
          </BackgroundModal>
        ) : null}
      </MyFilesPage>
    </>
  );
}

export default MyFiles;
