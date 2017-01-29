const authService = require('./service');
const boomHelper = require('../common/boom-helper');

const signin = function* signin(req, reply) {
	const { email, password } = req.payload;
	try {
		const signinUser = yield authService.signin(email, password);
		reply(signinUser);
	} catch (err) {
		console.log('err', err);
		reply(boomHelper.dispatchBoomCall(err));
	}
};

module.exports = {
	signin,
};
