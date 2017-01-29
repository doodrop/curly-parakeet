const Promise = require('bluebird');
const models = require('../../../models/index');
const encryptionHelper = require('../common/encryption-helper');

const getUserByEmail = email => (
	new Promise((resolve, reject) => {
		models.User.findOne({
			where: {
				email,
			},
		})
		.then(user => resolve(user))
		.catch(err => reject(err));
	})
);

const createUser = (name, email, password) => (
	new Promise((resolve, reject) => {
		models.User
			.create({
				email,
				name,
				password: encryptionHelper.encrypt(password),
			})
			.then((user) => {
				resolve(user.get({ plain: true }));
			})
			.catch(err => reject(err));
	})
);

module.exports = {
	getUserByEmail,
	createUser,
};
