import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import axios from "axios";

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

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Graveyard', +92331510667, "Johar Town", "Yes",
//   <IconButton aria-label="delete">
//   <DeleteIcon />
// </IconButton>
//   ),
//   createData('Catering Service', 92331510667, "Johar Town", "Yes",
//   <IconButton aria-label="delete">
//   <DeleteIcon />
// </IconButton>),
//   createData('Coffin rows', 92331510667, "Johar Town", "Yes",
//   <IconButton aria-label="delete">
//   <DeleteIcon />
// </IconButton>
//   ),
//   createData('Catering Service', 92331510667, "Johar Town", "Yes",
//   <IconButton aria-label="delete">
//   <DeleteIcon />
// </IconButton>
//   ),
//   createData('Graveyard', 92331510667, "Johar Town", "Yes",
//   <IconButton aria-label="delete">
//   <DeleteIcon />
// </IconButton>
//   ),
// ];

// const rows = [
//   {
//     type: "graveyard",
//     phone: "923233666396",
//     location: "iqbal town",
//     availability: "yes",
//   },
// ];

export default function StickyHeadTable() {
  const [rows, setRows] = useState([]);
  axios.get("https://fyp-2022.herokuapp.com/api/markets").then((res) => {
    setRows(res.data);
  });

  return (
    
    <TableContainer style={{ marginTop: "5%" }} component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Type</StyledTableCell>
            <StyledTableCell align="left">Area</StyledTableCell>
            <StyledTableCell align="left">Phone</StyledTableCell>
            <StyledTableCell align="left">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow align="left" key={row.area}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.type}</StyledTableCell>
              <StyledTableCell align="left">{row.location}</StyledTableCell>
              <StyledTableCell align="left">{row.phone}</StyledTableCell>

              <StyledTableCell>
                <button
                  style={{ marginLeft: "-11%" }}
                  onClick={() => {
                    axios
                      .delete(
                        `https://fyp-2022.herokuapp.com/api/markets/${row._id}`
                      )
                      .then((res) => {
                        console.log(res);
                      });
                  }}
                >
                  {" "}
                  Delete Market{" "}
                </button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
