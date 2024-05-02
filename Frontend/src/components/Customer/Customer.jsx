/* eslint-disable no-unused-vars */

import React from "react";
import fakeData from "./FakeDataCustomer";
import "./Customer.css";

const Customer = () => {
  return (
    <div className="table-container">
      <div className="table_header">
        <h1>Client</h1>
      </div>
      <div className="table_body">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Nom</th>
              <th>REV</th>
              <th>Adresse</th>
              <th>Mode de paiement</th>
              <th>Délai</th>
              <th>Note comptable</th>
              <th>Credit safe</th>
              <th>Plan de relance</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody className="table_data">
            {fakeData.map((data) => {
              const {
                date,
                name,
                rev,
                address,
                payment,
                deadline,
                financialNote,
                creditNote,
                recoveryPlan,
                status,
              } = data;
              return (
                <tr key={name}>
                  <td>{date}</td>
                  <td>{name}</td>
                  <td>{rev}</td>
                  <td>{address}</td>
                  <td>{payment}</td>
                  <td>{deadline}</td>
                  <td>{financialNote}</td>
                  <td>{creditNote}</td>
                  <td>{recoveryPlan}</td>
                  <td>{status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customer;
