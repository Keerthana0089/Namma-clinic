// Components/HomePage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import "./../App.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="box" onClick={() => navigate("/user-login")}>
        <img src="/images/user.png" alt="User" className="profile-image" />
        <h2>User</h2>
      </div>
      <div className="box" onClick={() => navigate("/doctor-login")}>
        <img src="/images/doctor.png" alt="Doctor" className="profile-image" />
        <h2>Doctor</h2>
      </div>
    </div>
  );
};

export default HomePage;
