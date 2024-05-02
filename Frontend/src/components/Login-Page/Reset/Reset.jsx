/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Form from "../Form/Form";
import LargeBtn from "../LargeBtn/LargeBtn";
import check from "../../../assets/icons/Checkmark.svg";
import uncheck from "../../../assets/icons/UnCheck.svg";
import { Link } from "react-router-dom";

import "./Reset.css";

const Reset = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="reset-container">
      <h3>Réinitialiser mot de passe</h3>
      <form className="reset-form">
        <Form
          className="input password"
          type="password"
          name="reset-password"
          placeholder="Nouveau mot de passe"
        />
        <Form
          className="input password"
          type="password"
          name="confirm-password"
          placeholder="Confirmez mot de passe"
        />
        <small className="small-btn">
          <button
            className="checkbtn"
            onClick={(e) => {
              e.preventDefault();
              setIsChecked(!isChecked);
            }}
          >
            {isChecked ? (
              <img src={check} alt="checked" className="icon" />
            ) : (
              <img src={uncheck} alt="unchecked" className="icon" />
            )}
          </button>
          <p>Captcha</p>
        </small>
        <small>
          <Link to="/login" className="Link">
            Retour à la connexion
          </Link>
        </small>
        <LargeBtn text="Valider" className="large-btn" />
      </form>
    </div>
  );
};

export default Reset;
