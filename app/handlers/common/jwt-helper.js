const jwt = require('jsonwebtoken');
const jwtConfig = require('../../config/jwt');

const issueToken = payload => (
	jwt.sign(payload, jwtConfig.key, { expiresIn: '10 days' })
);

module.exports = {
	issueToken,
};
