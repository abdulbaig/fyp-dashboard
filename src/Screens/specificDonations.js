import React from 'react'
import axios from 'axios';
import {useState, useEffect} from "react";



const SpecificDonations = () => {

    const [data, setData] = useState([]);
let token = localStorage.getItem("token")
  useEffect(()=>{
    const getData = async ()=>{
        const res = await axios.get("https://fyp-2022.herokuapp.com/api/donations/getDonations",
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
        <h3 style={{marginTop: "70px", marginLeft: "55px"}}>Specific Donations:</h3>
        </div>
        <table style={{ marginLeft: "5%", width: "90%" }}>
          <tr style={{ backgroundColor: "#039450", color: "white", height: "50px" }}>
            <th>Name</th>
            <th>Email</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
          {data.map((record) => {
            return (
              <tr style={{ backgroundColor: "#e5f6df", height: "50px" }}>
                <td>{record.name}</td>
                <td>{record.email}</td>
                <td>{record.category}</td>
                <td>{record.amount}</td>
                <td>{record.status}</td>
              </tr>
            );
          })}
        </table>
    </div>
  )
}

export default SpecificDonations