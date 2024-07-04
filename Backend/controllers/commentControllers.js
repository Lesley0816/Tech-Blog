const { Comment, Post } = require('../models');

// Function to create a comment on a post
exports.createComment = async (req, res) => {
  const { postId } = req.params;
  const { content } = req.body;
  try {
    const post = await Post.findByPk(postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    const comment = await Comment.create({ content, PostId: postId });
    res.status(201).json(comment);
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Function to delete a comment on a post
exports.deleteComment = async (req, res) => {
  const { postId, commentId } = req.params;
  try {
    const comment = await Comment.findByPk(commentId);
    if (!comment || comment.PostId !== Number(postId)) {
      return res.status(404).json({ message: 'Comment not found for the post' });
    }
    await comment.destroy();
    res.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    console.error('Error deleting comment:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};