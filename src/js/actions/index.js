'use strict';

const {obj, arr} = require('iblokz-data');

// namespaces=
const counter = require('./counter');

// initial
const initial = {
};

// actions
const set = (key, value) => state => obj.patch(state, key, value);
const toggle = key => state => obj.patch(state, key, !obj.sub(state, key));
const arrToggle = (key, value) => state =>
	obj.patch(state, key,
		arr.toggle(obj.sub(state, key), value)
	);

module.exports = {
	initial,
	counter,
	set,
	toggle,
	arrToggle
};
