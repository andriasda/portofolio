import React from "react";
import { useState } from "react";
import Modal from "./Modal";

const WorksItems = ({ item }) => {
  const [modalState, setmodalState] = useState(false);
  function openModal() {
    setmodalState(!modalState);
  }
  return (
    <div>
      {/* {modalState.toString()} */}
      <div className="work__card" key={item.id}>
        <img src={item.image} alt="" className="work__img" />
        <h3 className="worktitle">{item.title}</h3>
        <p>{item.deskripsi}</p>
        {/* <a className="work__button" onClick={openModal}>
          detail <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a> */}
      </div>
      {/* <Modal toggle={modalState} /> */}
    </div>
  );
};

export default WorksItems;
