/* eslint-disable no-unused-vars */
import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorRoute = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <h1>Une erreur est survenue</h1>
      <h1>{error?.error?.toString() ?? error?.toString()}</h1>
    </>
  );
};

export default ErrorRoute;
