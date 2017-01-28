module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('User', {
		email: Sequelize.STRING,
		name: Sequelize.STRING,
		password: Sequelize.STRING,
	});
	return User;
};
