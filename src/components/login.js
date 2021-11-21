import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { confirmAction } from "../store/actions/auth";

const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(confirmAction({ userName, password }));
  };

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate("/dashboard");
    }
  }, [auth]);

  return (
    <>
      <main className="main-container">
        <form action="/" method="post" className="form">
          <label
            htmlFor="username"
            placeholder="Enter username"
            className="form-label"
          >
            Username
          </label>
          <input
            type="text"
            className="form-input"
            value={userName}
            required
            onChange={(e) => setUserName(e.target.value)}
          />
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-input"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="btn btn-block"
            onClick={handleSubmit}
            disabled={userName === "" && password === "" ? true : false}
          >
            Log in
          </button>
        </form>
      </main>
    </>
  );
};
export default Login;
