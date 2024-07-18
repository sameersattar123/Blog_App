import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    comfirmedPassword: "",
  });

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post('http://localhost:4000/api/users/register' , userData)
      const newUser = await res.data;
      console.log(newUser)
      if (!newUser) {
        setError('couldnot register user. Please try again')
      }
      navigate('/')
    } catch (err) {
      setError(err.res.data.message)
    }
  };

  const changeInputHandle = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  console.log(userData);
  return (
    <section className="register">
      <div className="container">
        <h2>Sign Up</h2>
        <form className="register_form form" onSubmit={registerUser}>
        {error && <p className="form_error_message">{error}</p>}
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
            name="comfirmedPassword"
            value={userData.comfirmedPassword}
            onChange={changeInputHandle}
            required
          />
          <button className="btn primary" type="submit">
            Register
          </button>
        </form>
        <small>
          Already Have an Account? <Link to={"/login"}>Sign In</Link>
        </small>
      </div>
    </section>
  );
};

export default Register;
