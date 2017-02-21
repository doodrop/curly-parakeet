const Promise = require('bluebird');
const trashCanHelper = require('./helper');
const jwtHelper = require('../common/jwt-helper');

const getTrashCans = Promise.coroutine(function* getTrashCans() {
	const trashCans = yield trashCanHelper.getTrashCans();
	return trashCans;
});

const getTrashCanById = Promise.coroutine(function* getTrashCanById(id) {
	const trashCan = yield trashCanHelper.getTrashCanById(id);
	return trashCan;
});

const createTrashCan = Promise.coroutine(function* createTrashCan(latitude, longitude) {
	const trashCan = yield trashCanHelper.createTrashCan(latitude, longitude);
	return trashCan;
})

const deleteTrashCan = Promise.coroutine(function* deleteTrashCan(id) {
	const count = yield trashCanHelper.deleteTrashCan(id);
	return count === 1;
})

module.exports = {
	getTrashCans,
	getTrashCanById,
	createTrashCan,
	deleteTrashCan,
};
