'use strict';

const Joi = require('joi');
const co = require('co');
const authHandler = require('../handlers/auth/handler');

module.exports = [{
	method: 'POST',
	path: '/signin',
	config: {
		validate: {
			payload: {
				email: Joi.string().email().required().description('User email'),
				password: Joi.string().min(6).required().description('User password'),
			},
		},
		auth: false,
		handler: {
			async: co.wrap(authHandler.signin),
		},
	},
}];
