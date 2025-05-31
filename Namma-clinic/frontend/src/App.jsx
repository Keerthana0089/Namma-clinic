// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import UserPage from "./Components/UserPage";
import DoctorLoginPage from "./Components/DoctorLoginPage";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user-login" element={<UserPage />} />
      <Route path="/doctor-login" element={<DoctorLoginPage />} />
    </Routes>
  </Router>
);

export default App;
