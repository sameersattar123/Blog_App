import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../assets/avatar1.jpg";
const PostAuthor = ({authorID , createdAt}) => {
  return (
    <Link to={`/posts/users/sndxsn`} className="post_author">
      <div className="post_author_avatar">
        <img src={Avatar} alt="" />
      </div>
      <div className="post_author_details">
        <h5>By: Ernest Achiever</h5>
        <small>Just Now</small>
      </div>
    </Link>
  );
};

export default PostAuthor;
