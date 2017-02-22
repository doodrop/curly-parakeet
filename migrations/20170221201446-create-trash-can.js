'use strict';

module.exports = {
	up: function(queryInterface, Sequelize) {
		return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS postgis;')
			.then(() => {
				return queryInterface.createTable('TrashCans', {
					id: {
						allowNull: false,
						autoIncrement: true,
						primaryKey: true,
						type: Sequelize.INTEGER
					},
					location: {
						type: Sequelize.GEOMETRY('POINT')
					},
					validatedCount: {
						type: Sequelize.INTEGER,
						defaultValue: 1,
						allowNull: false
					},
					createdAt: {
						allowNull: false,
						type: Sequelize.DATE
					},
					updatedAt: {
						allowNull: false,
						type: Sequelize.DATE
					}
				});
			});
	},
	down: function(queryInterface, Sequelize) {
		return queryInterface.dropTable('TrashCans');
	}
};
