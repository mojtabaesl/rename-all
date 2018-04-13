const yargs = require('yargs');

const { renameAll } = require('./rename');

const argv = yargs
  .command('rename', 'rename all files in a directory', {
    path: {
      alias: 'p',
      describe: 'Provide a path to files',
      demand: true
    },
    sortType: {
      alias: 's',
      describe: 'You can choose the type of file sorting',
      choices: ['typical', 'numbers'],
      default: 'numbers'
    }
  })
  .help().argv;

const command = argv._[0];

if (command === 'rename') {
  const path = argv.path;
  const sortType = argv.sortType;
  renameAll(path, sortType);
} else {
  console.log('Invalid Command !!!');
}
