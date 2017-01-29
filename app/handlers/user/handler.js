const userService = require('./service');
const boomHelper = require('../common/boom-helper');

const createUser = function* createUser(req, reply) {
	const { name, email, password } = req.payload;
	try {
		const message = yield userService.createUser(name, email, password);
		reply({
			message,
		});
	} catch (err) {
		reply(boomHelper.dispatchBoomCall(err));
	}
};

module.exports = {
	createUser,
};
