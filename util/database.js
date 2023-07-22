const Sequelize = require('sequelize');

const sequelize = new Sequelize('arbyy', 'root', '', {
  dialect: 'mysql',
});

module.exports = sequelize;
