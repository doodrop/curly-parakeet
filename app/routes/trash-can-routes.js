const trashCanHandler = require('../handlers/trash-can/handler');
const co = require('co');
const Joi = require('joi');

module.exports = [{
	method: 'GET',
	path: '/trash-cans',
	config: {
		handler: {
			async: co.wrap(trashCanHandler.getTrashCans),
		},
		auth: false,
	},
}, {
	method: 'GET',
	path: '/trash-cans/{id}',
	config: {
		handler: {
			async: co.wrap(trashCanHandler.getTrashCanById),
		},
		auth: false,
	},
}, {
	method: 'POST',
	path: '/trash-cans',
	config: {
		validate: {
			payload: {
				location: Joi.object().keys({
					latitude: Joi.number().required(),
					longitude: Joi.number().required(),
				}).required(),
			},
		},
		handler: {
			async: co.wrap(trashCanHandler.createTrashCan),
		},
		auth: false,
	},
}, {
	method: 'DELETE',
	path: '/trash-cans/{id}',
	config: {
		handler: {
			async: co.wrap(trashCanHandler.deleteTrashCan),
		},
		auth: false,
	},
}];
