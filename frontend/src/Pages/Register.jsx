import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    comfirmPassword : ''
  });
  
  const changeInputHandle = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  console.log(userData)
  return (
    <section className="register">
      <div className="container">
        <h2>Sign Up</h2>
        <form action="" className="register_form form">
          <p className="form_error_message">This is an error message</p>
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={userData.name}
            onChange={changeInputHandle}
            required
          />
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
          <input
            type="password"
            placeholder="Comfirm Passwrod"
            name="comfirmPassword"
            value={userData.comfirmPassword}
            onChange={changeInputHandle}
            required
          />
          <button className="btn primary" type="submit">Register</button>
        </form>
        <small>Already Have an Account? <Link to={'/login'}>Sign In</Link></small>
      </div>
    </section>
  );
};

export default Register;
