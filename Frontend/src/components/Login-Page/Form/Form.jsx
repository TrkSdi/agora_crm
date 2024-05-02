/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Form.css";

const Form = ({ className, type, name, placeholder }) => {
  return (
    <input
      className={className}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default Form;
