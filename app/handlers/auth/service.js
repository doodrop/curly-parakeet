const Promise = require('bluebird');
const jwtHelper = require('../common/jwt-helper');
const encryptionHelper = require('../common/encryption-helper');
const authHelper = require('./helper');

const signin = Promise.coroutine(function* signin(email, password) {
	try {
		const user = yield authHelper.getUserByEmail(email);
		if (user === null || !encryptionHelper.verifyPassword(user.password, password)) {
			return Promise.reject({
				code: 400,
				message: 'Invalid email address or password.',
			});
		}
		const token = jwtHelper.issueToken(user.get({ plain: true }));
		return Promise.resolve({
			token,
			user,
		});
	} catch (err) {
		return Promise.reject(err);
	}
});

module.exports = {
	signin,
};
