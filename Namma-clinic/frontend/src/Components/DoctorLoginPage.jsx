// Components/DoctorLoginPage.jsx
import React from "react";
import "./../App.css";
import "./CommonCSS.css";

const DoctorLoginPage = () => {
  return (
    <div className="user-page">
      <h1>Welcome, Doctor!</h1>
      <h3>Login</h3>
      <form>
        <div className="form-group">
          <label htmlFor="doctorId">Doctor ID:</label>
          <input type="text" id="doctorId" name="doctorId" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default DoctorLoginPage;
