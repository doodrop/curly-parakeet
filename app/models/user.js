'use strict';

const Sequelize = require('sequelize');

const sequelize = new Sequelize('doodrop', 'osmanhernandez', 'admin', {
	dialect: 'postgres',
});

const User = sequelize.define('users', {
	email: Sequelize.STRING,
	name: Sequelize.STRING,
});

User.sync();
module.exports = User;
