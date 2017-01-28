const Promise = require('bluebird');
const models = require('../../../models/index');

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

const validateToken = ({ id, email }) => (
	new Promise((resolve, reject) => {
		models.User.findOne({
			where: {
				id,
				email,
			},
		})
		.then((user) => {
			if (user === null) {
				return reject(false);
			}
			resolve(true);
		})
		.catch(err => reject(err));
	})
);

module.exports = {
	getUserByEmail,
	validateToken,
};
