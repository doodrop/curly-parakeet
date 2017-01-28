const Promise = require('bluebird');
const userHelper = require('./helper');
const jwtHelper = require('../common/jwt-helper');

const createUser = Promise.coroutine(function* createUser(name, email, password) {
	try {
		const user = yield userHelper.getUserByEmail(email);
		if (user !== null) {
			return Promise.reject({
				code: 400,
				message: 'Email already used by another user.',
			});
		}
		const createdUser = yield userHelper.createUser(name, email, password);
		const token = jwtHelper.issueToken(createdUser);
		return Promise.resolve({
			createdUser,
			token,
		});
	} catch (err) {
		return Promise.reject(err);
	}
});

module.exports = {
	createUser,
};
