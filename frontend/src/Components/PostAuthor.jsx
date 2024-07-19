import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
TimeAgo.addLocale(en)

// Create formatter (English).
const timeAgo = new TimeAgo('en-US')


const PostAuthor = ({authorID , createdAt}) => {
  const [author, setAuthor] = useState([]);
  console.log(author)

  const getAuthor = async (e)  => {
       try {
        const resposne = await axios.get(`http://localhost:4000/api/users/${authorID}`)
        setAuthor(resposne?.data)
       } catch (error) {
        console.log(error)
       }

  }



  useEffect(() => {
    getAuthor();
  }, []);
  return (
    <Link to={`/posts/users/${authorID}`} className="post_author">
      <div className="post_author_avatar">
        <img src={`http://localhost:4000/uploads/${author?.avatar}`} alt="" />
      </div>
      <div className="post_author_details">
        <h5>By: {author.name}</h5>
        {/* <small>{timeAgo.format(new Date(createdAt))}</small> */}
      </div>
    </Link>
  );
};

export default PostAuthor;
