import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul className="footer_category">
        <li>
          <Link to={"/posts/categories/Agriculture"}>Agriculture</Link>
        </li>
        <li>
          <Link to={"/posts/categories/Bussines"}>Bussines</Link>
        </li>
        <li>
          <Link to={"/posts/categories/Education"}>Education</Link>
        </li>
        <li>
          <Link to={"/posts/categories/Entertainment"}>Entertainment</Link>
        </li>
        <li>
          <Link to={"/posts/categories/Weather"}>Weather</Link>
        </li>
        <li>
          <Link to={"/posts/categories/Art"}>Art</Link>
        </li>
        <li>
          <Link to={"/posts/categories/Uncategorized"}>Uncategorized</Link>
        </li>
        <li>
          <Link to={"/posts/categories/Investment"}>Investment</Link>
        </li>
      </ul>
      <div className="footer_copyright">
        <small>All Rights Reserved &copy; Copyright, Sameer Sattar</small>
      </div>
    </footer>
  );
};

export default Footer;
