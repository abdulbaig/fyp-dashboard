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
import axios from "axios";
import WhiteCollarRequest from "./WhiteCollarRequest";
import fypLogo from "../images/FypLogo.jpeg";         

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
  const [data, setData] = useState([]);
  const [value, setValue] = useState(0);
 
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(()=>{
    let token = localStorage.getItem("token")
    console.log(token)
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
  },[])

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 224,
      }}
    >
      
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider", marginTop: "10%" }}
      >
        <Tab sx={{paddingTop: "20%"}} label="Add Market" {...a11yProps(0)} />
        <Tab label="View Fund Donations" {...a11yProps(1)} />
        <Tab label="View Markets" {...a11yProps(2)} />
        <Tab label="View Janaza Requests" {...a11yProps(3)} />
        <Tab label="View WhiteCollarStudent Requests" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <AdminNav />
        <div style={{ marginTop: "5%" }}>
          <h3>Add Market Details</h3>
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
              style={{ width: "300px" }}
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
          </div>
          <br></br>
          <br></br>
          <button
            onClick={() => {
              axios
                .post("http://fyp-2022.herokuapp.com/api/markets", {
                  name,
                  phone,
                  location,
                  type,
                })
                .then((res) => {
                  setType("");
                  setLocation("");
                  setName("");
                  setPhone("");
                });
            }}
          >
            Register
          </button>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AdminNav />
        <h3 style={{ marginBottom: "5%", marginTop: "5%" }}>
          View Funds Donations
        </h3>
        <table style={{ marginLeft: "5%", width: "90%" }}>
          <tr style={{ backgroundColor: "#039450", color: "white" }}>
            <th>Name</th>
            <th>Cnic</th>

            <th>Phone</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          {data.map((record) => {
            return (
              <tr style={{ backgroundColor: "#e5f6df" }}>
                <td>{record.name}</td>
                <td>{record.cnic}</td>

                <td>{record.phone}</td>
                <td>{record.category}</td>
                <td>{record.amount}</td>
                <td>{record.status}</td>
                <td>
                  <button
                    onClick={async (e) => {
                      await axios.get(
                        `https://fyp-2022.herokuapp.com/api/donations/approve/${record._id}`
                      );
                    }}
                  >
                    Approve
                  </button>
                  <button
                    onClick={(e) => {
                      axios.get(
                        `https://fyp-2022.herokuapp.com/api/donations/decline/${record._id}`
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
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AdminNav />
        <StickyHeadTable />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AdminNav />
        <JanazaRequest />
      </TabPanel>
      <TabPanel style={{ width: "75%" }} value={value} index={4}>
        <AdminNav />
        <WhiteCollarRequest />
      </TabPanel>
    </Box>
  );
}
