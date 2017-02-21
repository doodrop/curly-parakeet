'use strict';

module.exports = function(sequelize, DataTypes) {
	const TrashCan = sequelize.define('TrashCan', {
		location: {
			type: DataTypes.GEOMETRY('POINT'),
			get: function() {
				const location = this.getDataValue('location');
				const [latitude, longitude] = location.coordinates;
				return {
					latitude,
					longitude
				}
			},
		},
		validatedCount: DataTypes.INTEGER
	});
	return TrashCan;
};
