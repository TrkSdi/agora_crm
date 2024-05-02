/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      <h3>Page introuvable ...</h3>
      <Link to="/login" className="Link">
        Retour à la page de connexion
      </Link>
    </div>
  );
};

export default Error404;
