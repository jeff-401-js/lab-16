    
'use strict';

/**
 * events module
 * @module events/event
 */

const EventEmitter = require('events');

const events = new EventEmitter();

/**
 * events export
 * @type {Object}
 */

module.exports = events;