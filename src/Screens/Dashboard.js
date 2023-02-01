import { useState, useEffect } from "react";
import "./dashboard.css";
import axios from "axios";


  const Dashboard = () => {

    const [funds, setFunds] = useState([]);
    // const [fundj, setFundj] = useState([]);
    axios.get("https://fyp-2022.herokuapp.com/api/donationRecord").then((res) => {
      setFunds(res.data);
      // setFundj(res.data);
    });

    const [wcr, setWcr] = useState([]);
    axios.get("https://fyp-2022.herokuapp.com/api/collarRecord").then((res) => {
      setWcr(res.data);
    });

    const [jr, setJr] = useState([]);
    axios.get("https://fyp-2022.herokuapp.com/api/janazaRecord").then((res) => {
      setJr(res.data);
    });

    const [topFundRaisers, setTopFundRaisers] = useState([]);
    axios.get("https://fyp-2022.herokuapp.com/api/topFundraisers").then((res) => {
      setTopFundRaisers(res.data);
    });
;
    return (
        <>
        <div style={{textAlign: "start"}}>
        <h3 style={{marginTop: "70px", marginLeft: "55px"}}>Dashboard:</h3>
        </div>
      <div className="dashboard-container">
            <div className="dashboard-funds">
                <p className="till-now"><span style={{backgroundColor: "#1976D2", color: "white", borderRadius: "7px",
            padding: "5px"}}>Till Now</span></p>
                <h1 style={{paddingTop: "40px"}}>Total Funds</h1>
                {funds.map((totalFunds) => (
                <h2 style={{color: "green"}}>{totalFunds._id}: {totalFunds.total}</h2>
                ))}
                {/* {fundj.map((totalFunds) => (
                <h2 style={{color: "green"}}>{totalFunds._id.total}</h2>
                ))} */}
            </div>
            <div className="wc-j-funds">
            <div className="dashboard-wcfunds">
            <p className="till-now"><span style={{backgroundColor: "#1976D2", color: "white", borderRadius: "7px",
            padding: "3px"}}>Till Now</span></p>
                <h2 style={{paddingTop: "0px"}}>Total W.C Requested Amount</h2>
                {wcr.map((totalWcr) => (
                <h3 style={{color: "green"}}>{totalWcr.total}</h3>
                ))}
            </div>
            <div className="dashboard-jfunds">
            <p className="till-now"><span style={{backgroundColor: "#1976D2", color: "white", borderRadius: "7px",
            padding: "3px"}}>Till Now</span></p>
                <h2 style={{paddingTop: "0px"}}>Total Janaza Requested Amount</h2>
                {jr.map((totalJr) => (
                <h3 style={{color: "green"}}>{totalJr.total}</h3>
                ))}
            </div>
            </div>
          <div className="top-fundraisers">
            <h2>Top Fundraisers</h2>
            <div className="fundraiser-container">
            <div className="fundraisers">
            {topFundRaisers.map((topfRaisers) => (
              <div>
                <div className="fundraiser-hover" style={{backgroundColor: "#E6E6E9", color: "green", borderRadius: "5px"}}>
              <p style={{marginLeft: "25px", fontSize: "18px", paddingTop: "10px"}}>Name: { topfRaisers.username}</p>
              <p style={{marginLeft: "25px", marginTop: "-15px", fontSize: "18px"}}>Phone #: {topfRaisers.phone}</p>
              <p style={{marginLeft: "25px", marginTop: "-15px", fontSize: "18px"}}>Email: {topfRaisers.email}</p>
              <p style={{marginLeft: "25px", marginTop: "-15px", fontSize: "18px", paddingBottom: "10px"}}>Status: {topfRaisers.status}</p>
                </div>
              </div>
            ))}
            </div>
          </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Dashboard;