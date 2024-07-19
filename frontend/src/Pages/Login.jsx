import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { UserContext } from "../context/userContext";

const Login = () => {

  const {setCurrentUser} = useContext(UserContext)
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [error, setError] = useState("");
  
  const changeInputHandle = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post('http://localhost:4000/api/users/login' , userData)
      const newUser = await res.data;
      setCurrentUser(newUser)
      navigate('/')
    } catch (err) {
      setError(err.res.data.message)
    }
  };
  console.log(userData)
  return (
    <section className="login">
      <div className="container">
        <h2>Sign In</h2>
        <form action="" className="login_form form" onSubmit={loginUser}>
          {error && <p className="form_error_message">{error}</p>}
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
          <button className="btn primary" type="submit">Login</button>
        </form>
        <small>Don't Have an Account? <Link to={'/register'}>Sign Up</Link></small>
      </div>
    </section>
  );
};

export default Login;
