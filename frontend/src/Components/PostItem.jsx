import React from "react";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";

const PostItem = ({
  postID,
  title,
  category,
  description,
  authorID,
  thumbnail,
}) => {
    const shortDescription = description.length > 145 ? description.substr(0,145) + '...' : description;
    const shortTitle = title.length > 30 ? title.substr(0,30) + '...' : title;
  return (
    <div className="post">
      <div className="post_thumbnail">
        <img src={thumbnail} alt="" />
      </div>
      <div className="post_content">
        <Link to={`/posts/${postID}`}>
        <h3>{shortTitle}</h3>
        </Link>
        <p>{shortDescription}</p>
        <div className="post_footer">
            <PostAuthor/>
            <Link className="btn category" to={`posts/categories/${category}`}>{category}</Link>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
