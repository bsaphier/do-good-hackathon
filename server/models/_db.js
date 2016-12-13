import Sequelize from 'sequelize';

const db = new Sequelize('postgres://localhost:5432/do-good-hackathon', {
    logging: false
});

export default db;