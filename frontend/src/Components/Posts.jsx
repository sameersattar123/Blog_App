import React, { useState } from "react";
import PostItem from "./PostItem";
import thumbnail1 from '../assets/blog1.jpg'
import thumbnail2 from '../assets/blog2.jpg'
import thumbnail3 from '../assets/blog3.jpg'
import thumbnail4 from '../assets/blog4.jpg'

const DUMMY_DATA = [
  {
    id: "1",
    thumbnail: thumbnail1,
    authorID: "author1",
    desc: "This is the description of the first post.",
    title: "First Post Title",
    category: "Technology",
  },
  {
    id: "2",
    thumbnail: thumbnail2,
    authorID: "author2",
    desc: "This is the description of the second post.",
    title: "Second Post Title",
    category: "Health",
  },
  {
    id: "3",
    thumbnail: thumbnail3,
    authorID: "author3",
    desc: "This is the description of the third post.",
    title: "Third Post Title",
    category: "Lifestyle",
  },
  {
    id: "4",
    thumbnail: thumbnail4,
    authorID: "author4",
    desc: "This is the description of the fourth post. ",
    title: "Fourth Post Title",
    category: "Education",
  },
];

const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_DATA);
  return (
    <section className="posts">
      <div className="continer posts-container">
        {posts.map((post, i) => {
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
        })}
      </div>
    </section>
  );
};

export default Posts;
