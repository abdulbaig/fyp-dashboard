import React from 'react'
import axios from 'axios';
import {useState, useEffect} from "react";



const Users = () => {

    const [data, setData] = useState([]);
let token = localStorage.getItem("token")
  useEffect(()=>{
    const getData = async ()=>{
        const res = await axios.get("https://fyp-2022.herokuapp.com/api/users",
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
        <h3 style={{marginTop: "70px", marginLeft: "55px"}}>Users:</h3>
        </div>
        <table style={{ marginLeft: "5%", width: "90%" }}>
          <tr style={{ backgroundColor: "#039450", color: "white", height: "50px" }}>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
          {data.map((record) => {
            return (
              <tr style={{ backgroundColor: "#e5f6df", height: "50px" }}>
                <td>{record.username}</td>
                <td>{record.email}</td>
                <td>{record.status}</td>
                <td>{record.total}</td>
                <td>
                <button
                style={{marginLeft: "10px"}}
                disabled={record.status==="inactive"?true:false}
                className="button-style-primary"
                  onClick={async (e) => {
                    await axios.get(
                      `https://fyp-2022.herokuapp.com/api/users/inactive/${record._id}`
                    );
                
                  }}
                >
                  Inactive
                </button>
                </td>
              </tr>
            );
          })}
        </table>
    </div>
  )
}

export default Users