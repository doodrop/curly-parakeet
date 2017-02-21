const Promise = require('bluebird');
const models = require('../../../models/index');

const getTrashCans = (options = {}) => {
	return models.TrashCan.findAll(options)
		.then(trashCans => {
			return trashCans.map(tc => tc.get({ plain: true }));
		});
};

const getTrashCanById = id => {
	return models.TrashCan.findById(id)
		.then(trashCan => trashCan && trashCan.get({ plain: true }));
};

const createTrashCan = (latitude, longitude) => {
	const location = {
		type: 'point',
		coordinates: [latitude, longitude]
	};
	return models.TrashCan
		.create({
			location
		})
		.then((trashCan) =>  trashCan.get({ plain: true	}));
};

const deleteTrashCan = (id) => {
	return models.TrashCan
		.destroy({ where: {
			id
		}});
}

module.exports = {
	getTrashCans,
	getTrashCanById,
	createTrashCan,
	deleteTrashCan,
};
