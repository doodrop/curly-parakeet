const authService = require('./service');
const boomHelper = require('../common/boom-helper');

const login = function* login(req, reply) {
	const { email, password } = req.payload;
	try {
		const loginUser = yield authService.login(email, password);
		reply(loginUser);
	} catch (err) {
		reply(boomHelper.dispatchBoomCall(err));
	}
};

module.exports = {
	login,
};
