import React, { useEffect, useState } from "react";
import axios from "axios";
import "./WhiteCollarRequest.css";

const WhiteCollarRequest = () => {
 
  const [data, setData] = useState([]);
  
  let token = localStorage.getItem("token")
      console.log("war gya")
      const getData = async ()=>{
        const res = await axios.get("https://fyp-2022.herokuapp.com/api/whitecollarrequests",
        {
          headers:{
            'Content-category': 'application/json',
    
            'x-access-token':token
          }
        })
        setData(res.data)
      }
    getData();
    useEffect(()=>{
    getData();
    },[])

  return (
    <div className="">
      <h3 style={{ marginBottom: "5%", marginTop: "5%" }}>
        View White Collar Request
      </h3>

      <div className="request-table">
        <table
          style={{
            maxWidth: "90%"
          }}
        >
          <tr
            style={{
              backgroundColor: "#039450",
              color: "#fafcf8",
              maxHeight: "2%"
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
            <th className="button-action">Action</th>
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
                <td style={{ padding: "5px" }}>
                <button
                disabled={record.status==="Cleared"?true:false}
                style={{marginBottom:"5px"}}
                className="button-style-primary"
                  onClick={async (e) => {
                    await axios.get(
                      `https://fyp-2022.herokuapp.com/api/whiteCollarRequests/approve/${record._id}`
                    );
                
                  }}
                >
                  Approve
                </button>
                <button
                disabled={record.status==="Cleared"?true:false}
                style={{marginBottom:"5px"}}
                className="button-style-secondary"
               
                  onClick={(e) => {
                    axios.get(
                      `https://fyp-2022.herokuapp.com/api/whiteCollarRequests/decline/${record._id}`
                    );
              
                  }}
                >
                  Decline
                </button>
                <button
                style={{marginLeft: "10px"}}
                disabled={record.status==="Cleared"?true:false}
                className="button-style-cleared"
                  onClick={async (e) => {
                    await axios.get(
                      `https://fyp-2022.herokuapp.com/api/janazaRequests/Donate/${record._id}`
                    );
                
                  }}
                >
                  Donate
                </button>
                <button
                disabled={record.status==="Cleared"?true:false}
                className="button-style-primary"
                  onClick={async (e) => {
                    await axios.get(
                      `https://fyp-2022.herokuapp.com/api/whiteCollarRequests/clear/${record._id}`
                    );
                
                  }}
                >
                  Clear
                </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default WhiteCollarRequest;
