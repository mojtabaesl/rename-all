const fs = require('fs');

let pathExists = path => {
  return new Promise((resolve, reject) => {
    fs.access(path, err => {
      if (err) reject(err.message);
      resolve();
    });
  });
};

module.exports = {
  pathExists
};
