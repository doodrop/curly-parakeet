'use strict';

const userService = require('./service');

const createUser = function* createUser(req, reply) {
	const { name, email, password } = req.payload;
	const message = yield userService.createUser(name, email, password);
	reply({
		message,
	});
};

module.exports = {
	createUser,
};
