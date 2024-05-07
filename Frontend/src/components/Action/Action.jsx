/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Action.css";
import Plus from "../../assets/action-icons/Plus.svg";
import Upward from "../../assets/action-icons/Upward.svg";
import Below from "../../assets/action-icons/Below.svg";
import Filter from "../../assets/action-icons/Filter.svg";
import { useGlobalContext } from "../context";

const Action = ({ field }) => {
  const { openModal } = useGlobalContext();

  return (
    <section className="actionBar">
      <div className="leftSide">
        <h1>{field}</h1>
      </div>
      <div className="rightSide">
        <div className="actionIcon" data="Filtrer">
          <img src={Filter} alt="Filtrer" className="filter-icon" />
        </div>
        <div className="actionIcon" data="Importer">
          <label htmlFor="fileInput">
            <img src={Below} alt="Importer" />
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
        </div>
        {/* A REVOIR FONCTION EXPORT */}
        <div className="actionIcon" data="Exporter">
          <label htmlFor="exportInput">
            <img src={Upward} alt="Exporter" />
          </label>
          <input id="exportInput" type="file" style={{ display: "none" }} />
        </div>
        <div className="actionIcon" data="Ajouter">
          <img src={Plus} alt="Ajouter" onClick={openModal} />
        </div>
      </div>
    </section>
  );
};

export default Action;
