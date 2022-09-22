import React, { useEffect, useState } from "react";
import axios from "axios";
import "./WhiteCollarRequest.css";

const WhiteCollarRequest = () => {
  // axios.get("https://fyp-2022.herokuapp.com/api/janazaRequests").then((res) => {
  //   setData(res.data);
  // });

  const [type, setType] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [data, setData] = useState([]);



    useEffect(()=>{
      let token = localStorage.getItem("token")
      console.log(token)
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
      getData()
    },[])

  return (
    <div className="white-collar-main">
      <h3 style={{ marginBottom: "5%", marginTop: "5%" }}>
        View White Collar Request
      </h3>

      <div className="request-table">
        <table
          style={{
            overflowX: "scroll",
            marginLeft: "5%",
            width: "90%",
    
          }}
        >
          <tr
            style={{
              backgroundColor: "#039450",
              color: "#fafcf8",
              maxHeight: "5%"
            }}
          >
            <th>Full Name</th>
            <th>University Name</th>
            <th>Cnic</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Father Name</th>
            <th>Father Cnic</th>
            <th>Monthly Income</th>
            <th>Matric Expense</th>
            <th>Inter Expense</th>
            <th>Earning Hands</th>
            <th>Total Expenditure</th>
            <th>Amount Requested</th>
            <th>Status</th>
            <th className="button-action">Action</th>
          </tr>
          {data.map((record) => {
            return (
              <tr style={{ backgroundColor: "#e5f6df" }}>
                <td>{record.full_name}</td>
                <td>{record.uni_name}</td>
                <td>{record.cnic}</td>
                <td>{record.phone}</td>
                <td>{record.gender}</td>
                <td>{record.fName}</td>
                <td>{record.fCnic}</td>
                <td>{record.gross_monthly_income}</td>
                <td>{record.matric_expenses}</td>
                <td>{record.intermediate_expenses}</td>
                <td>{record.earning_hands}</td>
                <td>{record.total_expenditure}</td>
                <td>{record.amount}</td>
                <td style={{ padding: "20px" }}>{record.status}</td>

                <td style={{ padding: "20px" }}>
                  <button
                    onClick={async (e) => {
                      await axios.get(
                        `https://fyp-2022.herokuapp.com/api/whiteCollarRequests/approve/${record._id}`
                      );
                    }}
                  >
                    Approve
                  </button>
                  <button
                    onClick={(e) => {
                      axios.get(
                        `https://fyp-2022.herokuapp.com/api/whiteCollarRequests/decline/${record._id}`
                      );
                    }}
                  >
                    Decline
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
