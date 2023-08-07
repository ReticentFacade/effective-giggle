import React from "react";
import axios from "axios";
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
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // Send login data to the backend
      const response = await axios.post("api/auth/login", config, {
        username,
        password,
      });
      console.log(response.data);

      if (response.status === 200) {
        // Redirect to homepage
        window.location.href = "/";
        console.log("Login successful!");
      } else {
        console.error("Login error: ", response.error);
      }
    } catch (error) {
      console.error("Login error: ", error);
    }
  };

  return (
    <div className="user-details">
      <h1>Login here:</h1>
      <form className="user-details-form">
        <div className="user-details-div">
          <label htmlFor="username" className="user-details-label">
            Username:{" "}
          </label>
          <input
            type="text"
            id="username"
            className="user-details-input"
            ref={usernameInputRef}
            validations={{ required }}
          />
        </div>
        <div className="user-details-div">
          <label htmlFor="password" className="user-details-label">
            Password:{" "}
          </label>
          <input
            type="password"
            id="password"
            className="user-details-input"
            ref={passwordInputRef}
            placeholder="   *******"
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
  );
}

export default Login;
