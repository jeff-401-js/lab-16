'use strict';

const event = require('../events/event.js');
require('../events/logger.js');
require('../events/error.js');

describe('logger', () => {
  it('logs the payload on save', () => {
    let spy = jest.spyOn(console, 'log');
    event.emit('log', 'saved', 'console logged');
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});

describe('error', () => {
  it('logs an error', () => {
    let spy = jest.spyOn(console, 'log');
    event.emit('error', 'blarggg!', 'some error');
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});