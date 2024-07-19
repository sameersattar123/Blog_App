import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/logo.png"
// import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { UserContext } from "../context/userContext";

const Header = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <nav>
      <div className="container nav_container">
        <Link to={"/"} className="nav_logo">
          <img src='https://yt3.googleusercontent.com/nwyG0ql8sxARogaFb3sgpjoNd86v7hL9W2eeEysP2LryigBtYtX-J2Mw9H1lpcB9D4sw0aCx9w=s900-c-k-c0x00ffffff-no-rj' alt="" />
        </Link>
       {currentUser?.id && <ul className="nav_menu">
          <li>
            <Link to={"/profile/fdfdd"} className="nav_link">
              Ernest Achiever
            </Link>
          </li>
          <li>
            <Link to={"/create"} className="nav_link">
              Create Post
            </Link>
          </li>
          <li>
            <Link to={"/authors"} className="nav_link">
              Authors
            </Link>
          </li>
          <li>
            <Link to={"/logout"} className="nav_link">
              Logout
            </Link>
          </li>
        </ul>}
       {!currentUser?.id && <ul className="nav_menu">
          <li>
            <Link to={"/authors"} className="nav_link">
              Authors
            </Link>
          </li>
          <li>
            <Link to={"/login"} className="nav_link">
              Login
            </Link>
          </li>
        </ul>}
        <button className="nav_toggle_btn">
            <AiOutlineClose/>
        </button>
      </div>
    </nav>
  );
};

export default Header;
