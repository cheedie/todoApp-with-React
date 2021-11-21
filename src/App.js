import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./index.css";
import Login from "./components/login";
import Dashboard from "./components/Dashboard";
import Landingpage from "./components/Landingpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<Landingpage />} />
        <Route path="/login" exact={true} element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
