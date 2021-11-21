import React from "react";
import logo from "../assets/images/todo2.png";
import { Link } from "react-router-dom";

const Landingpage = () => {
  return (
    <div className="login-wrapper">
      <header>
        <h2 className="login-text">Welcome to Ace it!</h2>
        <p className="login-paragraph">
          This app is going to help organize your daily routine and make your
          life easier
        </p>
      </header>
      <div className="image-container">
        <img src={logo} alt="to-do" />
      </div>
      <Link to="/login" className="btn">
        Get Started
      </Link>
    </div>
  );
};

export default Landingpage;
