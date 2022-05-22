const db = require('../config/db.config');
const { Sequelize, sequelize } = db;

const user = sequelize.define('users', {
    id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    firstName : {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = user;
