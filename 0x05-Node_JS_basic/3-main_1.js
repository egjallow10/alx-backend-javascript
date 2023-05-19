const countStudents = require('./full_server/utils');

countStudents('database.csv')
  .then((data) => {
    console.log(data);
    console.log('Done!');
  })
  .catch((error) => {
    console.log(error);
  });
console.log('After!');
