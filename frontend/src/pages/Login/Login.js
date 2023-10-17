import React from "react";
import instance from "../../utils/api.js";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../css/Login.css";
import NotFound from "../../components/404.js";

// ==================== Local Storage =====================
const setTokenInLocalStorage = (token) => {
  localStorage.setItem("token", token);
};

const removeTokenFromLocalStorage = () => {
  localStorage.removeItem("token");
};
// =========================================================

function Login() {
  const required = (value) => {
    if (!value) {
      return <div className="invalid-details">This field is required!</div>;
    }
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

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

      if (response.status === 200) {
        // Redirect to homepage
        console.log("Login successful!");

        // Access the token from the response's message
        const token = response.data.message.token;

        // Set the user's name after successful login
        setUserName(username);
        // Update the login state to true
        setIsLoggedIn(true);

        window.location.href = "/order";
        if (token) {
          setTokenInLocalStorage(token);
        } else {
          console.error("Token not found in the message.");
        }
      } else {
        console.error("Login error: ", response.error);
      }
    } catch (error) {
      console.error("Login error: ", error);
      // Redirect to the 404 page when login fails
      window.location.href = "/404";
    }
  };

  return (
    <div className="min-h-screen flex justify-center mr-14">
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
