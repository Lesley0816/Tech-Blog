const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://your_username:your_password@localhost:5432/database_name');

const Comment = sequelize.define('Comment', {
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Comment;