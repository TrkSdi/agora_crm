/* eslint-disable no-unused-vars */
import React from "react";
import { sideBarTop, sideBarBottom } from "../data";
import Item from "../Item/Item";
import { nanoid } from "nanoid";
import "./SideBar.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sideBar">
      {sideBarTop.map((item) => {
        const { name, image, path } = item;
        return (
          <div className="TopBar" key={nanoid()}>
            <Link to={path} className="items-link">
              <Item name={name} image={image} />
            </Link>
          </div>
        );
      })}

      <div className="BottomBar">
        {sideBarBottom.map((item) => {
          const { name, image, path } = item;
          return (
            <Link to={path} className="items-link" key={nanoid()}>
              <Item name={name} image={image} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
