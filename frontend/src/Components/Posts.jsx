import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import axios from "axios"
// import { DUMMY_DATA } from "../data";
import Loader from "./Loader";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(posts)

  const fetchPosts = async (e)  => {
       setIsLoading(true)
       try {
        const resposne = await axios.get('http://localhost:4000/api/posts')
        setPosts(resposne?.data)
       } catch (error) {
        console.log(error)
       }

       setIsLoading(false)
  }



  useEffect(() => {
    fetchPosts();
  }, []);

  if (isLoading) {
    return <Loader loading={true}/>
  }

  return (
    <section className="posts">
      <div className="continer posts-container">
        {posts.length > 0 ? (
          posts.map((post, i) => {
            return (
              <PostItem
                key={i}
                postID={post.id}
                title={post.title}
                category={post.category}
                description={post.description}
                authorID={post.authorID}
                thumbnail={post.thumbnail}
                createdAt={post.createdAt}
              />
            );
          })
        ) : (
          <h2 className="center">No Posts Found</h2>
        )}
      </div>
    </section>
  );
};

export default Posts;
