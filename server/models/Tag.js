import Sequelize from 'sequelize';
import db from './_db';

const Tag = db.define('tag', {
  tag: {
    type: Sequelize.STRING
  }
}

export default Tag;
