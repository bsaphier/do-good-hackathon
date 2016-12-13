import Sequelize from 'sequelize';
import db from '../../db';

const Tag = db.define('tag', {
  tag: {
    type: Sequelize.STRING
  }
}

export default Tag;
