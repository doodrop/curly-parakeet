const bcrypt = require('bcryptjs');

const encrypt = password => (
	bcrypt.hashSync(password, 10)
);

const verifyPassword = (storedPassword, passwordToCompare) => (
	bcrypt.compareSync(passwordToCompare, storedPassword)
);

module.exports = {
	encrypt,
	verifyPassword,
};
