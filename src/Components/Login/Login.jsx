import React from "react";
import "./Login.css";
import { FaRegUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaRegUser className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <FaLock className="icon" />
        </div>
        <div className="remember-forgot">
          <div className="checkbox">
            <input type="checkbox" />
            <span>Remember me</span>
          </div>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit">Log in</button>
        <div className="signup">
          Don't have an account? <a href="/signup">Sign up</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
