const fs = require('fs');

let readDir = path => {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
      if (err) return reject(err);
      resolve(files);
    });
  });
};

module.exports = {
  readDir
};
