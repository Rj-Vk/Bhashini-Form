import "./App.css";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard";
// import PrivateRoute from "./Components/PrivateRoute";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import uData from "./UserData.js";
import aData from "./AdminData.js";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [userData, addUserData] = useState({uData});
  const [adminData, addAdminData] = useState({aData});

  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/signup"
          element={<Signup setIsLoggedIn={setIsLoggedIn} addUserData={addUserData}  addAdminData={addAdminData} />}
        />
        <Route 
          path="/dashboard" 
          element={ isLoggedIn ? <Dashboard isLoggedIn={isLoggedIn}/> : <Login setIsLoggedIn={setIsLoggedIn}/>
          }>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
