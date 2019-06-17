'use strict';

/**
 * fs module
 * @module __tests__/__mocks__/fs
 */

/**
 * events export
 * @type {Object}
 */
module.exports = exports = {};


/**
 * readfile
   * @param {object} file - file be written
   * @param {object} cb - to be transformed
   * @desc writeFile function
   */

exports.readFile = (file, cb) => {
  if(file.match(/bad/i)){
    cb('Invalid file');
  }else{
    cb(undefined, Buffer.from('File Contents'));
  }
};

/**
 * writeFile
   * @param {object} file - file be written
   * @param {object} cb - to be transformed
   * @desc writeFile function
   */

exports.writeFile = (file, buffer, cb) => {
  if(file.match(/bad/i)){
    cb('Invalid file');
  }else{
    cb(undefined, Buffer.from('File Contents'));
  }
};