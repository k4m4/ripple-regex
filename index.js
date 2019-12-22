'use strict';
const re = 'r[0-9a-zA-Z]{24,34}';

module.exports = opts => {
	opts = opts || {};
	return opts.exact ? new RegExp('(?:^' + re + '$)') : new RegExp(re, 'g');
};
