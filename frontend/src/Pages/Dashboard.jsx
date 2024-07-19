import React, { useContext, useEffect, useState } from "react";
import { DUMMY_DATA } from "../data";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

const Dashboard = () => {
  const [posts, setPosts] = useState(DUMMY_DATA);

  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);
  return (
    <section className="dashboard">
      {posts.length > 0 ? (
        <div className="dashboard dashboard_container">
          {posts.map((post, i) => {
            return (
              <article key={post.id} className="dashboard_post">
                <div className="dashboard_post_info">
                  <div className="dashboard_post_thumbnail">
                    <img src={post.thumbnail} alt="" />
                  </div>
                  <h5>{post.title}</h5>
                </div>
                <div className="dashboard_post_actions">
                  <Link to={`/posts/${post.id}`} className="btn sm">
                    View
                  </Link>
                  <Link
                    to={`/posts/${post.id}/edit`}
                    className="btn sm primary"
                  >
                    Edit
                  </Link>
                  <Link
                    to={`/posts/${post.id}/delete`}
                    className="btn sm danger"
                  >
                    Delete
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="center"></div>
      )}
    </section>
  );
};

export default Dashboard;
