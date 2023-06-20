import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../css/Login.css";

function Login() {
  const required = (value) => {
    if (!value) {
      return <div className="invalid-details">This field is required!</div>;
    }
  };

  const usernameInput = useRef();

  useEffect(() => {
    usernameInput.current.focus();
  }, []);

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
      <button className="btn place-order-btn login-auth-btn">Login</button>
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
