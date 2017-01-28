const Promise = require('bluebird');
const jwtHelper = require('../common/jwt-helper');
const encryptionHelper = require('../common/encryption-helper');
const authHelper = require('./helper');

const login = Promise.coroutine(function* login(email, password) {
	try {
		const user = yield authHelper.getUserByEmail(email);
		if (user === null || !encryptionHelper.verifyPassword(user.password, password)) {
			return Promise.reject({
				code: 400,
				message: 'Invalid email address or password.',
			});
		}
		const token = jwtHelper.issueToken(user);
		return Promise.resolve({
			token,
			user,
		});
	} catch (err) {
		return Promise.reject(err);
	}
});

module.exports = {
	login,
};
