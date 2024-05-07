/* eslint-disable no-unused-vars */
import React from "react";
import "./ModalCustomer.css";
import close from "../../assets/form-icons/close.svg";
import { useGlobalContext } from "../context";

const ModalCustomer = () => {
  const { closeModal } = useGlobalContext();
  return (
    <div className="modal-container" onClick={(e) => e.stopPropagation()}>
      <h1>MODAL</h1>
      <button className="close-btn" onClick={closeModal}>
        <img src={close} alt="close button" className="close-icon" />
      </button>
    </div>
  );
};

export default ModalCustomer;
