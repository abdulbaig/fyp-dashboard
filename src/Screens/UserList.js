// import React, { useEffect } from "react";
// import "./userList.css";
// import { DataGrid } from "@material-ui/data-grid";
// import { DeleteOutline } from "@material-ui/icons";
// import { userRows } from "../components/dummyData";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";

// export default function UserList() {
//   const [data, setData] = useState(userRows);

//   const handleDelete = (id) => {
//     setData(data.filter((item) => item.id !== id));
//   };

//   const columns = [
//     { field: "id", headerName: "ID", width: 90 },
//     {
//       field: "user",
//       headerName: "User",
//       width: 200,
//       renderCell: (params) => {
//         return (
//           <div className="userListUser">
//             {/* <img className="userListImg" src={params.row.avatar} alt="" /> */}
//             {params.row.username}
//           </div>
//         );
//       },
//     },
//     { field: "email", headerName: "Email", width: 200 },
//     {
//       field: "status",
//       headerName: "Status",
//       width: 120,
//     },
//     {
//       field: "transaction",
//       headerName: "Transaction Volume",
//       width: 160,
//     },
//     {
//       field: "action",
//       headerName: "Action",
//       width: 150,
//       renderCell: (params) => {
//         return (
//           <>
//             <Link to={"/user/" + params.row.id}>
//               <button className="userListEdit">Edit</button>
//             </Link>
//             <DeleteOutline
//               className="userListDelete"
//               onClick={() => handleDelete(params.row.id)}
//             />
//           </>
//         );
//       },
//     },
//   ];

//   return (
//     <div className="userList">
//       <DataGrid
//         rows={data}
//         disableSelectionOnClick
//         columns={columns}
//         pageSize={8}
//         checkboxSelection
//       />
//     </div>
//   );
// }

// // import React from 'react'
// // import './UserList.css';
// // import { DataGrid } from '@material-ui/data-grid';

// // export default function UserList() {

// //     const columns = [
// //         { field: 'id', headerName: 'ID', width: 30 },
// //         { field: 'firstName', headerName: 'First name', width: 70 },
// //         { field: 'lastName', headerName: 'Last name', width: 70 },
// //         {
// //           field: 'age',
// //           headerName: 'Age',
// //           type: 'number',
// //           width: 60,
// //         },
// //         {
// //           field: 'fullName',
// //           headerName: 'Full name',
// //           description: 'This column has a value getter and is not sortable.',
// //           sortable: false,
// //           width: 90,
// //         },
// //       ];

// //       const rows = [
// //         { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
// //         { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
// //         { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
// //         { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
// //         { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
// //         { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
// //         { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
// //         { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
// //         { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// //       ];

// //       return (
// //           <div className='userList'>
// //                <DataGrid
// //         rows={rows}
// //         columns={columns}
// //         pageSize={5}
// //         // rowsPerPageOptions={[5]}
// //         checkboxSelection
// //       />
// //           </div>

// //       )
// // }
