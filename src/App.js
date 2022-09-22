import logo from "./logo.svg";
import "./App.css";
import { Layout } from "./Screens/Layout";
import { Requests } from "./components/Requests";
import { AddMarket } from "./components/AddMarket";
import PermanentDrawerLeft from "./Screens/VerticalTabs";
import AdminLogin from "./Screens/AdminLogin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VerticalTabs from "./Screens/VerticalTabs";
import UserList from "./Screens/UserList";


function App() {
  return (
    <div className="App">
      <Router>
        {/* <Login /> */}
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          {/* <Route path="/" element={<PermanentDrawerLeft />} /> */}
          <Route
            path="/PermanentDrawerLeft"
            element={<PermanentDrawerLeft />}
          />
          <Route path="/" element={<AdminLogin />} />
          <Route path="/UserList" element={<UserList />} />
          <Route path="/AddMarket" element={<AddMarket />} />
          <Route path="/Requests" element={<Requests />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
