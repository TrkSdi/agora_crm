/* eslint-disable no-unused-vars */
import React from "react";
import ModalCustomer from "../../components/Customer/ModalCustomer";
import Action from "../Action/Action";
import { useGlobalContext } from "../context";
import Table from "../Table/Table";
import { header, data } from "../Table/HeaderData";

const Prospect = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div className="table-container">
      <div
        className={isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}
        onClick={closeModal}
      >
        <ModalCustomer />
      </div>
      <div className="table_header">
        <Action field="Prospect" />
      </div>
      <Table header={header} data={data} />
    </div>
  );
};

export default Prospect;
