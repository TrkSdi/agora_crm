/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Action.css";
import Plus from "../../assets/action-icons/Plus.svg";
import Upward from "../../assets/action-icons/Upward.svg";
import Below from "../../assets/action-icons/Below.svg";

const Action = ({ field }) => {
  return (
    <section className="actionBar">
      <div className="leftSide">
        <h1>{field}</h1>
      </div>
      <div className="rightSide">
        <img src={Below} alt="Importer" />
        <img src={Upward} alt="Exporter" />
        <img src={Plus} alt="Ajouter" />
      </div>
    </section>
  );
};

export default Action;