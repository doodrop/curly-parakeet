const Promise = require('bluebird');
const userHelper = require('./helper');
const jwtHelper = require('../common/jwt-helper');

const createUser = Promise.coroutine(function* createUser(name, email, password) {
	try {
		const dbUser = yield userHelper.getUserByEmail(email);
		if (dbUser !== null) {
			return Promise.reject({
				code: 400,
				message: 'Email already used by another user.',
			});
		}
		const user = yield userHelper.createUser(name, email, password);
		const token = jwtHelper.issueToken(user);
		return Promise.resolve({
			user,
			token,
		});
	} catch (err) {
		return Promise.reject(err);
	}
});

module.exports = {
	createUser,
};
