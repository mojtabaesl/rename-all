const fs = require('fs');
const courseInfo = require('./input/course.json');

const foldername =
  'E:\\front end masters\\'+'Networking and Streams';

fs.readdir(foldername, (err, files) => {
  const regex = /\d+/g;
  files.sort((a, b) => {
    let numA = Number(a.match(regex));
    let numB = Number(b.match(regex));
    return numA - numB;
  });
  let i = 0;
  files.forEach(file => {
    let p = names.names[i];
    console.log(p);
    fs.rename(
      foldername + '\\' + file,
      foldername + '\\' + p + '.webm',
      function(err) {
        if (err) console.log('ERROR: ' + err);
      }
    );
    i = i + 1;
  });
});
