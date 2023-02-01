import React, { useEffect, useState } from "react";
import axios from "axios";
import "./WhiteCollarRequest.css";


const ClearedWcRequests = () => {
 
  const [data, setData] = useState([]);
  
  
    useEffect(()=>{
      let token = localStorage.getItem("token")
      console.log("check")
      const getData = async ()=>{
        const res = await axios.get("https://fyp-2022.herokuapp.com/api/whiteCollarRequests/getCleared",
        {
          headers:{
            'Content-category': 'application/json',
    
            'x-access-token':token
          }
        })
        setData(res.data)
      }
    getData();
    },[])

  return (
    <>
       <div style={{textAlign: "start"}}>
        <h3 style={{marginTop: "70px", marginLeft: "55px"}}>Cleared WCS Requests:</h3>
        </div>

      <div className="cleared-wc-container">
        <table
          // style={{
          //   marginLeft: "5%",
          //   maxWidth: "70%",
          //   overflowX: "scroll !important"
          // }}
        >
          <tr
            style={{
              backgroundColor: "#039450",
              color: "#fafcf8",
              maxHeight: "5%"
            }}
          >
            <th>Full Name</th>
            <th>Institute Name</th>
            <th>Class</th>
            <th>Cnic</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Father Cnic</th>
            <th>Monthly Income</th>
            <th>Earning Hands</th>
            <th>Total Expenditure</th>
            <th>Bank Name</th>
            <th>Account Name</th>
            <th>Account Number</th>
            <th>Amount Requested</th>
            <th>Status</th>
          </tr>
          {data.map((record) => {
            return (
              <tr style={{ backgroundColor: "#e5f6df" }}>
                <td>{record.full_name}</td>
                <td>{record.institute_name}</td>
                <td>{record.class}</td>
                <td>{record.cnic}</td>
                <td>{record.phone}</td>
                <td>{record.email}</td>
                <td>{record.fCnic}</td>
                <td>{record.gross_monthly_income}</td>
                <td>{record.earning_hands}</td>
                <td>{record.total_expenditure}</td>
                <td>{record.bankName}</td>
                <td>{record.accountName}</td>
                <td>{record.accountNumber}</td>
                <td>{record.amount}</td>
                <td style={{ padding: "20px" }}>{record.status}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default ClearedWcRequests;
