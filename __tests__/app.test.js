'use strict';

/**
 * events module
 * @module __tests__/app.test
 */

const event = require('../events/event.js');
// const app = require('../app.js');

require('../events/logger.js');
require('../events/error.js');
const mocks = require('../__mocks__/fs.js');
jest.mock('../__mocks__/fs');
let readFile = mocks.readFile;
// console.log(readFile);
let writeFile = mocks.writeFile;

/**
 * log test
   * @desc logger test function
   */

describe('logger', () => {
  it('logs the payload on save', () => {
    let spy = jest.spyOn(console, 'log');
    event.emit('log', 'saved', 'console logged');
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});

/**
 * error test
   * @desc error test function
   */

describe('error', () => {
  it('logs an error', () => {
    let spy = jest.spyOn(console, 'log');
    event.emit('error', 'blarggg!', 'some error');
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});

/**
 * readfile test
   * @desc readfile test function
   */

describe('readfile Module', () => {

  it('Should take an object', () => {
    let file = 'fileContents.txt';
    return readFile(file, (err, data) => {
      expect(err).toBeUndefined();
      expect(data).toEqual(Buffer.from(file));
    });
  });
});

/**
 * writefile test
   * @desc writefile test function
   */

describe('writefile Module', () => {

  it('Should take an object', () => {
    let file = 'fileoutput.txt';
    return writeFile(file, (err, data) => {
      expect(err).toBeUndefined();
      expect(data).toEqual(Buffer.from(file));
    });
  });
});