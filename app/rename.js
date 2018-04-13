const fs = require('fs');
const path = require('path');

const info = require('./../input/info.json');
const { pathExists } = require('./utils/path-exists');
const { checkNamesArray } = require('./utils/check-names-array');
const { readDir } = require('./utils/read-directory');
const { checkNumberOfFiles } = require('./utils/check-number-of-files');

let renameAll = async (pathToDir, sortType) => {
  try {
    await pathExists(pathToDir);
    await checkNamesArray(info.title);
    const files = await readDir(pathToDir);
    await checkNumberOfFiles(info.names.length, files.length);

    if (sortType === 'numbers') {
      const regex = /\d+/g;
      files.sort((a, b) => {
        let numA = Number(a.match(regex));
        let numB = Number(b.match(regex));
        return numA - numB;
      });
    }
    for (let i = 0; i < files.length; i++) {
      const newName = info.names[i];
      const file = files[i];
      const fileExtension = path.extname(file);
      fs.rename(
        pathToDir + path.sep + file,
        pathToDir + path.sep + newName + fileExtension,
        err => {
          if (err) throw new Error(err);
        }
      );
    }
    console.log('### Files rename was successful ###');
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  renameAll
};
