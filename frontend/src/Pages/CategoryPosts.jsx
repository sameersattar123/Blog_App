import React, { useEffect, useState } from 'react'
import PostItem from '../Components/PostItem';
import { DUMMY_DATA } from '../data';
import axios from 'axios';
import Loader from '../Components/Loader';
import { useParams } from 'react-router-dom';

const CategoryPosts = () => {
  const {category} = useParams();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPosts = async (e)  => {
       setIsLoading(true)
       try {
        const resposne = await axios.get(`http://localhost:4000/api/posts/categories/${category}`)
        setPosts(resposne?.data)
       } catch (error) {
        console.log(error)
       }

       setIsLoading(false)
  }

  useEffect(() => {
    fetchPosts();
  }, [category]);



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
                postID={post._id}
                title={post.title}
                category={post.category}
                description={post.description}
                authorID={post.creator}
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
  )
}

export default CategoryPosts