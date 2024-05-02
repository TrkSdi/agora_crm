/* eslint-disable no-unused-vars */
import React from "react";
import "./Login.css";
import LargeBtn from "../LargeBtn/LargeBtn";
import Form from "../Form/Form";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <h3>Connexion</h3>
      <form className="login-form">
        <Form
          className="input email"
          type="email"
          name="email"
          placeholder="Adresse Email"
        />
        <Form
          className="input password"
          type="password"
          name="password"
          placeholder="Mot de passe"
        />
        <small>
          <Link to="/reset" className="Link">
            Mot de passe oublié ?
          </Link>
        </small>
        <LargeBtn link="/dashboard" text="Valider" className="large-btn" />
      </form>
    </div>
  );
};

export default Login;
