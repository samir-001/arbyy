const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Users = sequelize.define('users', {
  Uid: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: Sequelize.STRING,
  password: {
    type: Sequelize.STRING,
    allowNull: false,

  },
  role: {
    type: Sequelize.ENUM('visitor','user', 'admin'),
    allowNull: false,
    defaultValue:'visitor',
  }

});

module.exports = Users;
