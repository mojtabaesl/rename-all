const fs = require('fs');
const path = require('path');

const info = require('./input/info.json');
const { pathExists } = require('./utils/pathExists');
const { checkNamesArray } = require('./utils/checkNamesArray');
const { readDir } = require('./utils/readDirectory');
const { checkNumberOfFiles } = require('./utils/checkNumberOfFiles');

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
        pathToDir + '\\' + file,
        pathToDir + '\\' + newName + fileExtension,
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
