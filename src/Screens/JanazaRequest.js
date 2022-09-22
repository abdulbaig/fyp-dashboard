import React, { useState , useEffect } from "react";
import axios from "axios";

const JanazaRequest = () => {
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
  },[])

  return (
    <div>
      <h3 style={{ marginBottom: "5%", marginTop: "5%" }}>
        View Janaza Request
      </h3>
      <table style={{ marginLeft: "5%", width: "90%" }}>
        <tr style={{ backgroundColor: "#039450", color: "#fafcf8" }}>
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
            <tr style={{ backgroundColor: "#e5f6df" }}>
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
                  onClick={async (e) => {
                    await axios.get(
                      `https://fyp-2022.herokuapp.com/api/janazaRequests/approve/${record._id}`
                    );
                  }}
                >
                  Approve
                </button>
                <button
                  onClick={(e) => {
                    axios.get(
                      `https://fyp-2022.herokuapp.com/api/janazaRequests/decline/${record._id}`
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
  );
};

export default JanazaRequest;
