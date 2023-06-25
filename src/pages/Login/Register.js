import { useState } from "react";
// import AuthService from "./AuthServices/authServices.js";
import "../../css/Login.css";
import AuthService from "./Auth/auth.js";

function Register() {
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");

  const onChangeUsername = (e) => {
    const username  = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  
  const handleRegister = (e) => {
    const userData = {
      "username": username,
      "password": password
    };
    console.log("Registering user...");
    const jsonObject = JSON.parse(JSON.stringify(userData));
    console.log(jsonObject);
    // console.log(userData);
  };

  const required = (value) => {
    if (!value) {
      return <div className="invalid-details">This field is required!</div>;
    }
  };

  AuthService.register(username, password).then(() => {
    console.log("You have registered successfully!");
  },
  (err) => {
    console.error(err);
  });

  // const form = document.querySelector('.user-details-form');
  // form.addEventListener('submit', (e) => {
  //   event.preventDefault();

  //   const username = document.querySelector('.username-input').value;
  //   const password = document.querySelector('.password-input').value;

  //   try{
  //     // Sending axios post req to backend route
  //     const response = axios.post('/api/user-registered', userData);

  //     // Handle response from backend
  //     console.log(response.data);

  //     // If successful registration, redirect to login page
  //     if(response.data === "User registered successfully!"){
  //       window.location.replace("/login");
  //     }
  //   } catch(err){
  //     console.error(err);
  //   }
  // });

  return (
    <div className="user-details">
      <h1>Register here:</h1>
      <form className="user-details-form" onSubmit={handleRegister}>
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
      <button 
        className="btn place-order-btn login-auth-btn"
        type="submit"
        onClick={handleRegister}>
          Register
      </button>
    </div>
  );
}

export default Register;
