const Sequelize = require('sequelize');

const sequelize = new Sequelize('arbyy', 'root', '', {
  dialect: 'mariadb',
});

module.exports = sequelize;
