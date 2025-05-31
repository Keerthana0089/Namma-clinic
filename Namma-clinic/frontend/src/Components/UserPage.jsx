// Components/UserLogin.jsx
import React from "react";
import "./../App.css";
import "./CommonCSS.css";

const UserLogin = () => {
  return (
    <div className="user-page">
      <h1>Welcome, User!</h1>
      <h3>Login</h3>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
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

export default UserLogin;
