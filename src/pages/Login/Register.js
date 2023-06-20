import { useRef, useEffect } from "react";
import AuthService from "./AuthServices/authServices.js";
import "../../css/Login.css";

function Register() {
  const usernameInput = useRef();

  useEffect(() => {
    usernameInput.current.focus();
  }, []);

  const required = (value) => {
    if (!value) {
      return <div className="invalid-details">This field is required!</div>;
    }
  };

  return (
    <div className="user-details">
      <h1>Register here:</h1>
      <form className="user-details-form">
        <div className="user-details-div">
          <label htmlFor="username" className="user-details-label">
            Username:{" "}
          </label>
          <input
            type="text"
            id="username"
            className="user-details-input"
            ref={usernameInput}
            validations={{required}}
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
            placeholder="   *******"
            validations={{required}}
          />
        </div>
      </form>

      <br />
      <br />
      <button className="btn place-order-btn login-auth-btn">Register</button>
    </div>
  );
}

export default Register;
