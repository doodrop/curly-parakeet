module.exports = {
	up: (queryInterface, sequelize) => (
		queryInterface.createTable('Users', {
			id: {
				type: sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			name: sequelize.STRING,
			email: sequelize.STRING,
			password: sequelize.STRING,
			createdAt: {
				type: sequelize.DATE,
				allowNull: false,
			},
			updatedAt: sequelize.DATE,
		})),
	down: queryInterface => (
		queryInterface.dropTable('Users')
	),
};
