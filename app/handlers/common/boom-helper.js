const Boom = require('boom');

const dispatchBoomCall = (error) => {
	switch (error.code) {
	case 400:
		return Boom.badRequest(error.message);
	case 500:
		return Boom.badImplementation();
	default:
		return Boom.badImplementation();
	}
};

module.exports = {
	dispatchBoomCall,
};
