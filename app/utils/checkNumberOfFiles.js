let checkNumberOfFiles = (numberOfNames, numberOfFiles) => {
  return new Promise((resolve, reject) => {
    if (numberOfNames === numberOfFiles) {
      resolve();
    } else {
      reject(
        'ERROR: The number of files in your dir and the nemes that you provided in "info.json" are not equal'
      );
    }
  });
};

module.exports = {
  checkNumberOfFiles
};
