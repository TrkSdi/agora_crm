/* eslint-disable no-unused-vars */

import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./route/Route";

const App = () => {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
