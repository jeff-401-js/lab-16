'use strict';

const event = require('../events/event.js');
// const app = require('../app.js');

require('../events/logger.js');
require('../events/error.js');
const mocks = require('./__mocks__/fs.js');
jest.mock('./__mocks__/fs');
let readFile = mocks.readFile;
// console.log(readFile);
let writeFile = mocks.writeFile;

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

describe('readfile Module', () => {

  it('Should take an object', () => {
    let file = 'fileContents.txt';
    return readFile(file, (err, data) => {
      expect(err).toBeUndefined();
      expect(data).toEqual(Buffer.from(file));
    });
  });
});

describe('writefile Module', () => {

  it('Should take an object', () => {
    let file = 'fileoutput.txt';
    return writeFile(file, (err, data) => {
      expect(err).toBeUndefined();
      expect(data).toEqual(Buffer.from(file));
    });
  });
});