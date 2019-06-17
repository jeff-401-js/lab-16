'use strict';

/**
 * logger module
 * @module events/logger
 */

const events = require('./event.js');

/**
 * logger
   * @param {object} event - event
   * @param {object} payload - message
   * @desc log emitter function
   */

function log(event, payload){
  let time = new Date();
  console.log(payload);
  console.log({event: event.toUpperCase(), time, payload});
}

events.on('log', log);