import React, { useState } from "react";
import PostItem from "./PostItem";
import { DUMMY_DATA } from "../data";


const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_DATA);
  return (
    <section className="posts">
      <div className="continer posts-container">
        { posts.length > 0 ? posts.map((post, i) => {
          return (
            <PostItem
              key={i}
              postID={post.id}
              title={post.title}
              category={post.category}
              description={post.desc}
              authorID={post.authorID}
              thumbnail={post.thumbnail}
            />
          );
        }) : <h2 className="center">No Posts Found</h2>
      } 
      </div>
    </section>
  );
};

export default Posts;