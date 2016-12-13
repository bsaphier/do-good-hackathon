import Sequelize from 'sequelize';
import db from '../../db';

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
  time: {
    type: Sequelize.TIME
  },
  location: {
    type: Sequelize.TEXT //not sure if we want to be more rigid?
  },
  scamDescrip: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

export default Post;
