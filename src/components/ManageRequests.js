// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';


// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));

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
//   createData('Coffin Market', 92331510667, "Johar Town", "Yes",
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

// export default function ManageRequests() {
//   return (
//     <TableContainer
//     style={{marginTop: '5%'}}
//      component={Paper}>
//       <Table sx={{ minWidth: 700 }} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Type</StyledTableCell>
//             <StyledTableCell align="right">Phone #</StyledTableCell>
//             <StyledTableCell align="right">Area</StyledTableCell>
//             <StyledTableCell align="right">Avialability</StyledTableCell>
//             <StyledTableCell align="right">Edit</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <StyledTableRow key={row.name}>
//               <StyledTableCell component="th" scope="row">
//                 {row.name}
//               </StyledTableCell>
//               <StyledTableCell align="right">{row.calories}</StyledTableCell>
//               <StyledTableCell align="right">{row.fat}</StyledTableCell>
//               <StyledTableCell align="right">{row.carbs}</StyledTableCell>
//               <StyledTableCell align="right">{row.protein}</StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
