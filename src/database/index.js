'use strict';

var nconf = require('nconf');
var databaseName = nconf.get('database');
var winston = require('winston');

if (!databaseName) {
	winston.error(new Error('Database type not set! Run ./nodebb setup'));
	process.exit();
}

var primaryDB = require('./' + databaseName);

primaryDB.parseIntField = function (data, field) {
	if (data.hasOwnProperty(field)) {
		data[field] = parseInt(data[field], 10) || 0;
	}
};

module.exports = primaryDB;
