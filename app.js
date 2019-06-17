'use strict';

const fs = require('fs');
const event = require('./events/event.js');
require('./events/logger.js');

const alterFile = (file) => {
  readFile(file)
    .then(data => {
      writeFile(file, upper(data));
    });
};

function readFile(file){
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if(err) { reject(err); }
      event.emit('log', 'readfile', `${file} read`);
      resolve(data.toString());

    });
  });
}

function upper(data){
  event.emit('log', 'uppercase', `${data} uppercased`);
  return data.toUpperCase();
}

function writeFile(file, text){
  return new Promise((resolve, reject) => {
    fs.writeFile(file, Buffer.from(text), (err, data) => {
      if(err) { reject(err); }
      event.emit('log', 'writefile', `${file} saved`);
    });
  });
}

let file = process.argv.slice(2).shift();
alterFile(file);