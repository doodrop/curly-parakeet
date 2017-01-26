'use strict';

const User = require('../../models/user');
const Promise = require('bluebird');

const sayHello = () => (
	new Promise((resolve) => {
		User
			.create({
				email: 'test@test.com',
				name: 'osman test',
			})
			.then(() => {
				resolve({
					created: true,
				});
			});
	})
);

module.exports = {
	sayHello,
};
