/* eslint-disable no-unused-vars */
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import fakeData from "./FakeDataCustomer";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Customer() {
  return (
    <>
      <h1>Client</h1>
      <div className="table-container">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Date</StyledTableCell>
                <StyledTableCell align="center">Nom</StyledTableCell>
                <StyledTableCell align="center">Rev</StyledTableCell>
                <StyledTableCell align="center">Adresse</StyledTableCell>
                <StyledTableCell align="center">
                  Mode de paiement
                </StyledTableCell>
                <StyledTableCell align="center">Délai</StyledTableCell>
                <StyledTableCell align="center">Note comptable</StyledTableCell>
                <StyledTableCell align="center">Credit Safe</StyledTableCell>
                <StyledTableCell align="center">
                  Plan de relance
                </StyledTableCell>
                <StyledTableCell align="center">Status</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {fakeData.map((data) => {
                const {
                  date,
                  name,
                  rev,
                  adress,
                  payment,
                  deadline,
                  financialNote,
                  creditNote,
                  recoveryPlan,
                  status,
                } = data;
                return (
                  <StyledTableRow key={name}>
                    <StyledTableCell component="th" scope="row">
                      {date}
                    </StyledTableCell>
                    <StyledTableCell align="center">{name}</StyledTableCell>
                    <StyledTableCell align="center">{rev}</StyledTableCell>
                    <StyledTableCell align="center">{adress}</StyledTableCell>
                    <StyledTableCell align="center">{payment}</StyledTableCell>
                    <StyledTableCell align="center">{deadline}</StyledTableCell>
                    <StyledTableCell align="center">
                      {financialNote}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {creditNote}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {recoveryPlan}
                    </StyledTableCell>
                    <StyledTableCell align="center">{status}</StyledTableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
