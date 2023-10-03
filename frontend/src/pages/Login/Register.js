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
    <div className="min-h-screen flex justify-center">
      <div className="user-details">
        <h1 className="mt-20 text-left">Register here:</h1>
        <form className="user-details-form mt-24 mb-4 flex-col">
          <div className="mb-10 flex justify-between items-center">
            <label htmlFor="username" className="user-details-label">
              Username:
            </label>
            <input
              type="text"
              id="username"
              className="user-details-input ml-2"
              name="username"
              ref={usernameInputRef}
              validations={{ required }}
            />
          </div>
          <div className="mb-10 flex justify-between items-center">
            <label htmlFor="email" className="user-details-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="user-details-input ml-2"
              name="email"
              ref={emailInputRef}
              validations={{ required }}
            />
          </div>
          <div className="mb-4 flex justify-between items-center">
            <label htmlFor="password" className="user-details-label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="user-details-input ml-2"
              name="password"
              placeholder=" ********"
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
    </div>
  );
}

export default Register;
