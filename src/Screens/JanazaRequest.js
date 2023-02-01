import React, { useState , useEffect } from "react";
import axios from "axios";
import { Route } from "react-router-dom";


const JanazaRequest = () => {
  // axios.get("https://fyp-2022.herokuapp.com/api/janazaRequests").then((res) => {
  //   setData(res.data);
  // });

  const [type, setType] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  const getData = async ()=>{
    let token = localStorage.getItem("token")
    const res = await axios.get("https://fyp-2022.herokuapp.com/api/janazaRequests",
    {
      headers:{
        'Content-category': 'application/json',

        'x-access-token':token
      }
    })
    setData(res.data)
  }
  getData()
  
  useEffect(()=>{
    
    getData();
  },[])

  return (
    <div>
      <div style={{textAlign: "start"}}>
        <h3 style={{marginTop: "70px", marginLeft: "55px"}}>View Janaza Requests:</h3>
        </div>
      <table style={{ marginLeft: "5%", width: "90%" }}>
        <tr style={{ backgroundColor: "#039450", color: "#fafcf8", height: "50px" }}>
          <th>Name</th>
          <th>Cnic</th>

          <th>Relation</th>
          <th>dName</th>
          <th>dCnic</th>
          <th>Age</th>
          <th>Amount Requested</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
        {data.map((record) => {
          return (
            <tr key ={record.cnic} style={{ backgroundColor: "#e5f6df", height: "50px" }}>
              <td>{record.name}</td>
              <td>{record.cnic}</td>

              <td>{record.relation}</td>
              <td>{record.dName}</td>
              <td>{record.dCnic}</td>
              <td>{record.age}</td>
              <td>{record.amount}</td>
              <td>{record.status}</td>

           <td>

                <button
                disabled={record.status==="Cleared"?true:false}
                className="button-style-primary"
                  onClick={async (e) => {
                    await axios.get(
                      `https://fyp-2022.herokuapp.com/api/janazaRequests/approve/${record._id}`
                    );
                
                  }}
                >
                  Approve
                </button>
                <button
                disabled={record.status==="Cleared"?true:false}
                className="button-style-secondary"
                style={{marginLeft: "10px"}}
                  onClick={(e) => {
                    axios.get(
                      `https://fyp-2022.herokuapp.com/api/janazaRequests/decline/${record._id}`
                    );
              
                  }}
                >
                  Decline
                </button>
                <button
                disabled={record.status==="Cleared"?true:false}
                className="button-style-primary"
                style={{marginLeft: "10px"}}
                  onClick={(e) => {
                    axios.get(
                      `https://fyp-2022.herokuapp.com/api/janazaRequests/donate/${record._id}`
                    );
              
                  }}
                >
                  Donate
                </button>
                <button
                style={{marginLeft: "10px"}}
                disabled={record.status==="Cleared"?true:false}
                className="button-style-cleared"
                  onClick={async (e) => {
                    await axios.get(
                      `https://fyp-2022.herokuapp.com/api/janazaRequests/clear/${record._id}`
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
  );
};

export default JanazaRequest;
