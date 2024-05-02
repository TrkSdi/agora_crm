/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./LargeBtn.css";
import { Link } from "react-router-dom";

const LargeBtn = ({ text, className, link }) => {
  return (
    <button className={className} type="submit">
      <Link to={link}>{text}</Link>
    </button>
  );
};

export default LargeBtn;
