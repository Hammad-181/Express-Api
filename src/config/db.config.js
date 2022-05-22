const Sequelize = require('sequelize');
const { dialect, username, host , port , password, database } = process.env;

const sequelize = new Sequelize('user_db', 'root', 'Hamms@1234' ,{
    host: host,
    dialect: 'mysql',
    port: port,
    pool: {
        max: 10,
        min: 5,
        acquire: 30000,
        idle: 20000
    }
});

const db = {
    sequelize,
    Sequelize
}

//sequelize.sync({force: true})
module.exports = db;


