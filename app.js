'use strict';

const fs = require('fs');

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
      resolve(data.toString());

    });
  });
}

function upper(data){
  return data.toUpperCase();
}

function writeFile(file, text){
  return new Promise((resolve, reject) => {
    fs.writeFile(file, Buffer.from(text), (err, data) => {
      if(err) { reject(err); }
      console.log(`${file} saved`);
    });
  });
}

let file = process.argv.slice(2).shift();
alterFile(file);