import React, { useState , useEffect } from "react";
import axios from "axios";
import { Route } from "react-router-dom";


const ClearedJanazaRequests = () => {
  
  const [data, setData] = useState([]);

  useEffect(()=>{
    const getData = async ()=>{
      let token = localStorage.getItem("token")
      console.log(token)
      const res = await axios.get("https://fyp-2022.herokuapp.com/api/janazaRequests/getCleared",
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
      <div style={{textAlign: "start"}}>
        <h3 style={{marginTop: "70px", marginLeft: "55px"}}>Cleared Janaza Requests:</h3>
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

           
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default ClearedJanazaRequests;
