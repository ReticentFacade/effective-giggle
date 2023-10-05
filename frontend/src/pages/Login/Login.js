import React from "react";
// import axios from "axios";
import instance from "../../utils/api.js";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../css/Login.css";

function Login() {
  const required = (value) => {
    if (!value) {
      return <div className="invalid-details">This field is required!</div>;
    }
  };

  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  useEffect(() => {
    usernameInputRef.current.focus();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const username = usernameInputRef.current.value;
    const password = passwordInputRef.current.value;

    try {
      // Send login data to the backend
      const response = await instance.post("/auth/login", {
        username,
        password,
      });
      console.log(response.data);

      if (response.status === 200) {
        // Redirect to homepage
        window.location.href = "/order";
        console.log("Login successful!");
      } else {
        console.error("Login error: ", response.error);
      }
    } catch (error) {
      console.error("Login error: ", error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center">
      <div className="user-details">
        <h1 className="mt-20 text-left">Login here:</h1>
        <form className="user-details-form flex-col mt-24 mb-24">
          <div className="mb-10 flex items-center justify-between">
            <label htmlFor="username" className="user-details-label">
              Username:
            </label>
            <input
              type="text"
              id="username"
              className="user-details-input"
              ref={usernameInputRef}
              validations={{ required }}
            />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <label htmlFor="password" className="user-details-label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="user-details-input"
              ref={passwordInputRef}
              placeholder=" ********"
              validations={{ required }}
            />
          </div>
        </form>

        <br />
        <br />
        <button
          className="btn place-order-btn login-auth-btn"
          onClick={handleSubmit}
        >
          Login
        </button>
        <p>
          Not registered? &nbsp;
          <Link to="/register">
            <u>Click here</u>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
