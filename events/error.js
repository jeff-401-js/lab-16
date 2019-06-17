'use strict';

/**
 * error module
 * @module events/error
 */

const events = require('./event.js');

/**
 * error
   * @param {object} event - event
   * @param {object} payload - message
   * @desc error log emitter function
   */

function log(event, payload){
  let time = new Date();
  console.log(payload);
  console.log({event: event.toUpperCase(), time, payload});
}

events.on('error', log);