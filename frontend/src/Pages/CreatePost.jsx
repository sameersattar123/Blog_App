import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Uncategorized");
  const [thumbnail, setThumbnail] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;
  const navigate = useNavigate();

  const createPost = async (e) => {
    e.preventDefault()
    const postData = new FormData();
    postData.set("title", title);
    postData.set("category", category);
    postData.set("description", description);
    postData.set("thumbnail", thumbnail);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/posts",
        postData,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 201) {
        return navigate("/");
      }
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  const POST_CATEGORIES = [
    "Agriculture",
    "Bussiness",
    "Education",
    "Entertainment",
    "Art",
    "Investment",
    "Uncategorized",
    "Weather",
  ];
  return (
    <section className="create_post">
      <div className="container">
        <h2>Create Post</h2>
       {error &&  <p className="form_error_message">{error}</p>}
        <form className="form create_post_form" onSubmit={createPost}>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Title"
            autoFocus
          />
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {POST_CATEGORIES.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
          <textarea
            name="description"
            cols="30"
            rows="10"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
          <input
            type="file"
            onChange={(e) => setThumbnail(e.target.files[0])}
            accept="jpg , png , jpeg"
          />
          <button className="btn primary" type="submit">
            Create
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreatePost;
