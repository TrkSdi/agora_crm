/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Table.css";
import { RxDotsVertical } from "react-icons/rx";

const Table = ({ header, data }) => {
  return (
    <div className="table_body">
      <table>
        <thead>
          <tr>
            {header.map((item) => {
              return <th>{item}</th>;
            })}
            <th></th>
          </tr>
        </thead>

        <tbody className="table_data">
          {data.map((item) => {
            return (
              <tr key={item.name}>
                {Object.keys(item).map((key) => (
                  <td key={key}>{item[key]}</td>
                ))}
                <td className="vertical-dot">
                  <RxDotsVertical />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
