'use strict';

const userService = require('./service');

const sayHello = function* sayHello(req, reply) {
	const message = yield userService.sayHello();
	reply({
		message,
	});
};

module.exports = {
	sayHello,
};
