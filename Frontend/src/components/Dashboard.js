import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/api/user/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the posts!", error);
      });
  }, []);

  const handleDelete = (postId) => {
    axios.delete(`/api/posts/${postId}`)
      .then(response => {
        setPosts(posts.filter(post => post.id !== postId));
      })
      .catch(error => {
        console.error("There was an error deleting the post!", error);
      });
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/create-post">Create New Post</Link>
      {posts.map(post => (
        <div key={post.id}>
          <h2><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;