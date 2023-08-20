import React from "react";
import { useRef, useEffect } from "react";
import instance from "../../utils/api.js";
import "../../css/Login.css";

function Register() {
  const required = (value) => {
    if (!value) {
      return <div className="invalid-details">This field is required!</div>;
    }
  };

  const usernameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  useEffect(() => {
    usernameInputRef.current.focus();
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const username = usernameInputRef.current.value;
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    try {
      // Send registration data to the backend
      const response = await instance.post("/auth/signup", {
        username,
        email,
        password,
      });
      console.log(response.data);

      if (response.status === 200) {
        // Redirect to homepage
        window.location.href = "/";
        console.log("Registration successful!");
      } else {
        console.error("Registration error: ", response.error);
      }
    } catch (error) {
      console.error("Registration error: ", error);
    }
  };

  return (
    <div className="user-details">
      <h1>Register here:</h1>
      <form
        className="user-details-form"
        // onSubmit={handleRegister}
      >
        <div className="user-details-div">
          <label htmlFor="username" className="user-details-label">
            Username:{" "}
          </label>
          <input
            type="text"
            id="username"
            className="user-details-input"
            name="username"
            ref={usernameInputRef}
            validations={{ required }}
          />
        </div>
        <div className="user-details-div">
          <label htmlFor="email" className="user-details-label">
            Email:{" "}
          </label>
          <input
            type="email"
            id="email"
            className="user-details-input"
            name="email"
            ref={emailInputRef}
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
            name="password"
            placeholder="   *******"
            ref={passwordInputRef}
            validations={{ required }}
          />
        </div>
      </form>

      <br />
      <br />
      <button
        className="btn place-order-btn login-auth-btn"
        type="submit"
        onClick={handleSubmit}
      >
        Register
      </button>
    </div>
  );
}

export default Register;
