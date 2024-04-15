import React from "react";
import "./Signup.css";
import { FaRegUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Login = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Sign up</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaRegUser className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <FaLock className="icon" />
        </div>

        <div className="input-box">
          <input type="password" placeholder="Confirm Password" required />
          <FaLock className="icon" />
        </div>
        <div className="input-box">
          <input type="email" placeholder="Email" required />
          <MdEmail className="icon" />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Phone Number" required />
          <FaPhoneAlt className="icon" />
        </div>

        <button type="submit">Sign up</button>
        <div className="signup">
          You have an account? <a href="/login">Login</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
