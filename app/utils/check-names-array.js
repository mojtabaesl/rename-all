const readline = require('readline');

let checkNamesArray = title => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise((resolve, reject) => {
    rl.question(
      `Do you want to use "${title}" array for names?[y/n]: `,
      answer => {
        if (answer === 'y' || answer === 'yes') {
          rl.close();
          return resolve();
        } else {
          rl.close();
          return reject('ERROR: go to info.json file');
        }
      }
    );
  });
};

module.exports = {
  checkNamesArray
};
