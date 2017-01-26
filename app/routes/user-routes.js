const userHandler = require('../handlers/user/handler');
const co = require('co');

module.exports = [{
	method: 'GET',
	path: '/hello',
	config: {
		handler: {
			async: co.wrap(userHandler.sayHello),
		},
	},
}];
