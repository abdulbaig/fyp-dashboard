import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import JanazaRequest from "./JanazaRequest";
import AdminNav from "../components/AdminNav";
import StickyHeadTable from "../components/StickyHeadTable";
import { TextField } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SpecificDonations from "./specificDonations";
import Dashboard from "./Dashboard";
import WhiteCollarRequest from "./WhiteCollarRequest";
import ClearedJanazaRequests from "./ClearedJanazaRequests";
import ClearedWcRequests from "./ClearedWcRequests";
import "./verticaltabs.css";
import Users from "./Users";

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ span: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [type, setType] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [availability, setAvailability] = useState("");
  const [data, setData] = useState([]);
  const [rate, setRate] = useState("");
  const [value, setValue] = useState(0);
 
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let token = localStorage.getItem("token")
    // console.log(token)
    const getData = async ()=>{
      const res = await axios.get("https://fyp-2022.herokuapp.com/api/donations",
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
    getData()
  },[])

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 244,
      }}
    >
      
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider", backgroundColor: "#FFFF"}}
      >
        <Tab sx={{paddingTop: "20%"}} label="Dashboard" {...a11yProps(0)} />
        <Tab label="Add Market" {...a11yProps(1)} />
        <Tab label="View General Donations" {...a11yProps(2)} />
        <Tab label="View Specific Donations" {...a11yProps(3)} />
        <Tab label="View Markets" {...a11yProps(4)} />
        <Tab label="View Janaza Requests" {...a11yProps(5)} />
        <Tab label="View WCS Requests" {...a11yProps(6)} />
        <Tab label="Cleared Janaza Requests" {...a11yProps(7)} />
        <Tab label="Cleared WCS Requests" {...a11yProps(8)} />
        <Tab label="Users" {...a11yProps(9)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <AdminNav />
        <Dashboard />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AdminNav />
        <div style={{textAlign: "start"}}>
        <h3 style={{marginTop: "70px", marginLeft: "55px"}}>Add Market Details:</h3>
        </div>
        <div style={{backgroundColor: "#FFFFFF", width: "400px", marginLeft: "35%", borderRadius: "20px"}}>
          
          <div>
            <TextField
              value={name}
              style={{ width: "300px" }}
              id="outlined-password-input"
              label="Enter Name"
              type="text"
              autoComplete="current-password"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <br></br>
            <br></br>
            <TextField
              value={phone}
              style={{ width: "300px"}}
              id="outlined-password-input"
              label="Enter Phone NO"
              type="number"
              autoComplete="current-password"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <br></br>
            <br></br>
            <TextField
              value={location}
              style={{ width: "300px" }}
              id="outlined-password-input"
              label="Enter Area"
              type="text"
              autoComplete="current-password"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
            <br></br>
            <br></br>
            <TextField
              style={{ width: "300px" }}
              id="outlined-password-input"
              label="Enter Type"
              type="text"
              autoComplete="current-password"
              value={type}
              onChange={(e) => {
                setType(e.target.value);
              }}
            />
            <br></br>
            <br></br>
            <TextField
              value={availability}
              style={{ width: "300px" }}
              id="outlined-password-input"
              label="Enter Availability"
              type="text"
              autoComplete="current-password"
              onChange={(e) => {
                setAvailability(e.target.value);
              }}
              />
          <br></br>
          <br></br>
          <TextField
              value={rate}
              style={{ width: "300px" }}
              id="outlined-password-input"
              label="Enter Rate"
              type="text"
              autoComplete="current-password"
              onChange={(e) => {
                setRate(e.target.value);
              }}
              />
          </div>
          <br></br>
          <button
            
            style={{
              marginBottom: "20px",
              marginLeft: "225px",
              backgroundColor: "#02a95c",
              border: "#02a95c",
              padding: "7px 15px 7px 15px",
              color: "#FFFFFF",
              borderRadius: "5px"
            }}
            onClick={() => {
              axios
                .post("http://fyp-2022.herokuapp.com/api/markets", {
                  name,
                  phone,
                  location,
                  type,
                  availability,
                  rate,
                })
                .then((res) => {
                  setType("");
                  setLocation("");
                  setName("");
                  setPhone("");
                  setAvailability("");
                  setRate("");
                  setData(res.data);
                  
                });
                navigate("/PermanentDrawerLeft")
            }}
          >
            Register
          </button>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AdminNav />
        <div style={{textAlign: "start"}}>
        <h3 style={{marginTop: "70px", marginLeft: "55px"}}>View Funds:</h3>
        </div>
        <table style={{ marginLeft: "5%", width: "90%" }}>
          <tr style={{ backgroundColor: "#039450", color: "white", height: "50px" }}>
            <th>Name</th>
            <th>Cnic</th>

            <th>Phone</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
          {data.map((record) => {
            return (
              <tr style={{ backgroundColor: "#e5f6df", height: "50px" }}>
                <td>{record.name}</td>
                <td>{record.cnic}</td>
                <td>{record.phone}</td>
                <td>{record.category}</td>
                <td>{record.amount}</td>
                <td>{record.status}</td>
              </tr>
            );
          })}
        </table>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AdminNav />
        <SpecificDonations />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <AdminNav />
        <div style={{textAlign: "start"}}>
        <h3 style={{marginTop: "70px", marginLeft: "55px"}}>View Markets:</h3>
        </div>
        <div style={{width: "90%", marginLeft: "5%"}}>
        <StickyHeadTable />
        </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <AdminNav />
        <JanazaRequest />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <AdminNav />
        <WhiteCollarRequest />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <AdminNav />
        <ClearedJanazaRequests />
      </TabPanel>
      <TabPanel value={value} index={8}>
        <AdminNav />
        <ClearedWcRequests />
      </TabPanel>
      <TabPanel value={value} index={9}>
        <AdminNav />
        <Users />
      </TabPanel>
    </Box>
  );
}
