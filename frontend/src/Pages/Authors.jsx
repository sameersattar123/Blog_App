import { Link } from "react-router-dom";
import Avatar1 from "../assets/avatar1.jpg";
import Avatar2 from "../assets/avatar2.jpg";
import Avatar3 from "../assets/avatar3.jpg";
import Avatar4 from "../assets/avatar4.jpg";
import Avatar5 from "../assets/avatar5.jpg";
import { useState } from "react";

const authorsData = [
  {
    id: 1,
    name: "John Doe",
    avatar: Avatar1,
    posts: 1,
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: Avatar2,
    posts: 2,
  },
  {
    id: 3,
    name: "Alice Johnson",
    avatar: Avatar3,
    posts: 3,
  },
  {
    id: 4,
    name: "Bob Brown",
    avatar: Avatar4,
    posts: 4,
  },
  {
    id: 5,
    name: "Bobs Brssown",
    avatar: Avatar5,
    posts: 5,
  },
];

const Authors = () => {
  const [authors, setAuthors] = useState(authorsData)
  return (
    <section className="authors">
      <div className="container authors_container">
        {authors.length > 0 ? (
          authors.map((author) => {
            return (
              <Link
                className="author"
                key={author.id}
                to={`/posts/users/${author.id}`}
              >
                <div className="author_avatar">
                  <img src={author.avatar} alt="" />
                </div>
                <div className="author_info">
                  <h4>{author.name}</h4>
                  <p>{author.posts}</p>
                </div>
              </Link>
            );
          })
        ) : (
          <h2>No Users/Authors Found</h2>
        )}
      </div>
    </section>
  );
};

export default Authors;
