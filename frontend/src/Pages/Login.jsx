import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  
  const changeInputHandle = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  console.log(userData)
  return (
    <section className="login">
      <div className="container">
        <h2>Sign In</h2>
        <form action="" className="login_form form">
          <p className="form_error_message">This is an error message</p>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={changeInputHandle}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={changeInputHandle}
            required
          />
          <button className="btn primary" type="submit">Register</button>
        </form>
        <small>Don't Have an Account? <Link to={'/register'}>Sign Up</Link></small>
      </div>
    </section>
  );
};

export default Login;
