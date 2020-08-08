'use strict';
const re = 'r[0-9a-zA-Z]{24,34}';

module.exports = options => {
	options = options || {};
	return options.exact ? new RegExp('(?:^' + re + '$)') : new RegExp(re, 'g');
};
