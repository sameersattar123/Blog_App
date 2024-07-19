import React, { useContext, useEffect, useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";


const EditPost = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Uncategorized");
  const [thumbnail, setThumbnail] = useState("");
  const [description, setDescription] = useState("");

  const POST_CATEGORIES = [
    "Agriculture",
    "Bussiness",
    "Education",
    "Entertainment",
    "Art",
    "Investment",
    "Uncategorized",
    "Weather",
  ]

  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);
  return (
    <section className="create_post">
      <div className="container">
        <h2>Edit Post</h2>
        <p className="form_error_message">This is an error message</p>
        <form className="form create_post_form" action="">
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
          <ReactQuill
            value={description}
            onChange={(value) => setDescription(value)}
            className="ql_react"
            />
            <input
              type="file"
              onChange={(e) => setThumbnail(e.target.files[0])}
              accept="jpg , png , jpeg"
            />
            <button className="btn primary" type="submit">
              Update
            </button>
        </form>
      </div>
    </section>
  );
};

export default EditPost;
