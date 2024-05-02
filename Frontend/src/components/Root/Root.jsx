/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../Side-Bar/Header/Header";
import SideBar from "../Side-Bar/SideBar/SideBar";

import "./Root.css";

import { Outlet } from "react-router-dom";
import ProfileIcon from "../Profile/ProfileIcon/ProfileIcon";
import ErrorRoute from "../Error-Page/ErrorRoute";

const Root = () => {
  return (
    <>
      <div className="root-container">
        <div className="header">
          <Header />
          <ProfileIcon />
        </div>
        <div className="left-col">
          <nav>
            <SideBar />
          </nav>
        </div>
        <div className="right-col">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Root;
