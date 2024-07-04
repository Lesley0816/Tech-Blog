import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`/api/posts/${id}`)
      .then(response => {
        setPost(response.data);
        setComments(response.data.comments);
      })
      .catch(error => {
        console.error("There was an error fetching the post!", error);
      });
  }, [id]);

  const handleCommentSubmit = () => {
    axios.post(`/api/posts/${id}/comments`, { content: comment })
      .then(response => {
        setComments([...comments, response.data]);
        setComment('');
      })
      .catch(error => {
        console.error("There was an error submitting the comment!", error);
      });
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Posted by {post.username} on {new Date(post.createdAt).toLocaleDateString()}</p>
      <div>
        <h3>Comments</h3>
        {comments.map(comment => (
          <div key={comment.id}>
            <p>{comment.content}</p>
            <p>Posted by {comment.username} on {new Date(comment.createdAt).toLocaleDateString()}</p>
          </div>
        ))}
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Leave a comment"
        />
        <button onClick={handleCommentSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default PostPage;