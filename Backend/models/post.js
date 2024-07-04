const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://your_username:your_password@localhost:5432/database_name');
const Comment = require('./Comment');

const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
});

Post.hasMany(Comment);
Comment.belongsTo(Post);

module.exports = Post;
