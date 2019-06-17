'use strict';

const events = require('./event.js');

function log(event, payload){
  let time = new Date();
  console.log(payload);
  console.log({event: event.toUpperCase(), time, payload});
}

events.on('error', log);