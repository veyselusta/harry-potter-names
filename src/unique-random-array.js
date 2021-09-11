const uniqueRandom = require('./unique-random')

module.exports = function uniqueRandomArray(array) {
	const random = uniqueRandom(0, array.length - 1);
	return () => array[random()];
}