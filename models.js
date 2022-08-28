const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'example-db',
    'user',
    'pass',
    {
        host: '.dev.sqlite',
        dialect: 'sqlite'
    }
);

module.exports = sequelize