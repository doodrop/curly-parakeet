const userHandler = require('../handlers/user/handler');
const co = require('co');
const Joi = require('joi');

module.exports = [{
	method: 'POST',
	path: '/signup',
	config: {
		validate: {
			payload: {
				email: Joi.string().email().required().description('User email'),
				password: Joi.string().min(6).max(30).required()
					.description('User password'),
				name: Joi.string().required().description('User name'),
			},
		},
		handler: {
			async: co.wrap(userHandler.createUser),
		},
		auth: false,
	},
}];
