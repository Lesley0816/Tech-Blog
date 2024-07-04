const express = require('express');
const router = express.Router();
const { createComment, deleteComment } = require('../controllers/commentController');

// POST /api/posts/:postId/comments
router.post('/:postId/comments', createComment);

// DELETE /api/posts/:postId/comments/:commentId
router.delete('/:postId/comments/:commentId', deleteComment);

module.exports = router;