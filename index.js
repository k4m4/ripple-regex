'use strict';
const re = '[1-9a-km-zA-HJ-NP-Z]{25,35}';

module.exports = opts => {
	opts = opts || {};
	return opts.exact ? new RegExp('(?:^' + re + '$)') : new RegExp(re, 'g');
};
