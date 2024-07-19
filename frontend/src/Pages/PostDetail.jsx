import React, { useContext, useEffect, useState } from "react";
import PostAuthor from "../Components/PostAuthor";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../context/userContext";
import DeletePost from "./DeletePost";
import Loader from "../Components/Loader";
import axios from "axios";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { currentUser } = useContext(UserContext);

  const getPost = async () => {
    setIsLoading(true)
    try {
     const response = await axios.get(`http://localhost:4000/api/posts/${id}`)
     setPost(response?.data)
    } catch (error) {
     setError(error)
    }

    setIsLoading(false)
  }
  useEffect(() => {
    getPost()
  }, []);

  if (isLoading) {
    return <Loader/>
  }
  return (
    <section className="post_detail">
      {error && <p className="error">{error}</p>}
      {post && (
        <div className="container post_detail_container">
          <div className="post_detail_header">
            <PostAuthor authorID={post.creator} createdAt={post.createdAt} />
            {currentUser?.id == post?.creator && (
              <div className="post-detail_buttons">
                <Link to={`/posts/${post?._id}/edit`} className="btn sm primary">
                  Edit
                </Link>
                <DeletePost postId={id} />
              </div>
            )}
          </div>
          <h1>{post.title}</h1>
          <div className="post_detail_thumbnail">
            <img src={`uploads/${post.thumbnail}`} alt="" />
          </div>
          <p>{post.description}</p>
        </div>
      )}
    </section>
  );
};

export default PostDetail;
