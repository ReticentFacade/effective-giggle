import { useRef, useState, useEffect } from "react";
import AuthService from "./AuthServices/authServices.js";
import "../../css/Login.css";

function Register() {
  // const usernameInput = useRef();

  // useEffect(() => {
  //   usernameInput.current.focus();
  // }, []);

  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");

  const onChangeUsername = (e) => {
    const username  = e.target.value;
    setUsername(username);
    console.log(setUsername);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
    console.log(setPassword);
  };

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
            name="username"
            value={username}
            // ref={usernameInput}
            onChange={onChangeUsername}
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
            name="password"
            value={password}
            placeholder="   *******"
            onChange={onChangePassword}
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
