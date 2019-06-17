'use strict';

const fs = require('fs');

const alterFile = (file) => {
  fs.readFile( file, (err, data) => {
    if(err) { throw err; }
    let text = data.toString().toUpperCase();
    fs.writeFile( file, Buffer.from(text), (err, data) => {
      if(err) { throw err; }
      console.log(`${file} saved`);
    });
  });
};

function readFile(file){
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if(err) { reject(err); }
      resolve(data.toString().toUpperCase());

    });
  });
}

let file = process.argv.slice(2).shift();
alterFile(file);