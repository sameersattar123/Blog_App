import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import axios from "axios";

const Authors = () => {
  const [authors, setAuthors] = useState([])
  console.log(authors)
  const [isLoading, setIsLoading] = useState(false)

  const getAuthors = async () => {
    setIsLoading(true)
    try {
     const resposne = await axios.get(`http://localhost:4000/api/users`)
     setAuthors(resposne?.data)
    } catch (error) {
     console.log(error)
    }

    setIsLoading(false)
  }
  useEffect(() => {
    getAuthors()
  }, [])

  if (isLoading) {
    return <Loader loading={true} />
  }
  
  return (
    <section className="authors">
      <div className="container authors_container">
        {authors.length > 0 ? (
          authors.map((author) => {
            return (
              <Link
                className="author"
                key={author.id}
                to={`/posts/users/${author._id}`}
              >
                <div className="author_avatar">
                  <img src={`uploads/${author.avatar}`} alt="" />
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
