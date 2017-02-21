const trashCanService = require('./service');
const boomHelper = require('../common/boom-helper');

const getTrashCans = function* getTrashCans(req, reply) {
	try {
		const message = yield trashCanService.getTrashCans();
		reply({
			message
		});
	} catch (err) {
		reply(boomHelper.dispatchBoomCall(err));
	}
};

const getTrashCanById = function* getTrashCanById(req, reply) {
	const { id } = req.params;
	try {
		const message = yield trashCanService.getTrashCanById(id);
		reply({
			message
		});
	} catch (err) {
		reply(boomHelper.dispatchBoomCall(err));
	}
};

const createTrashCan = function* createTrashCan(req, reply) {
	const { location: { latitude, longitude } } = req.payload;
	try {
		const message = yield trashCanService.createTrashCan(latitude, longitude);
		reply({
			message,
		});
	} catch (err) {
		reply(boomHelper.dispatchBoomCall(err));
	}
};

const deleteTrashCan = function* deleteTrashCan(req, reply) {
	const { id } = req.params;
	try {
		const message = yield trashCanService.deleteTrashCan(id);
		reply({
			message,
		});
	} catch (err) {
		console.error(err);
		reply(boomHelper.dispatchBoomCall(err));
	}
};

module.exports = {
	getTrashCans,
	getTrashCanById,
	createTrashCan,
	deleteTrashCan,
};
