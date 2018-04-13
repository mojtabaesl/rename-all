const fs = require('fs');

let pathExists = path => {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, states) => {
      if (err) reject(err.message);
      resolve();
    });
  });
};

module.exports = {
  pathExists
};
