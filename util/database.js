const Sequelize = require('sequelize');

const sequelize = new Sequelize('arbyy', 'root', '', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
