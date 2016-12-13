const Sequelize = require ('sequelize');
const db = require ('../../db');

const Post = db.define('post', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  personDescrip: {
    type: Sequelize.TEXT,
    defaultValue: 'No description'
  },
  date: {
    type: Sequelize.DATE
  },
  location: {
    type: Sequelize.TEXT //not sure if we want to be more rigid?
  },
  scamDescrip: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Post;
