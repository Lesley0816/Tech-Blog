import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/api/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the posts!", error);
      });
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
          <p>{new Date(post.createdAt).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
}

export default HomePage;