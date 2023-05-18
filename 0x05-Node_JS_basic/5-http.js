const http = require('http');
const studentDetails = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;
// console.log(process.argv[2]);

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    studentDetails(process.argv[2]).then((data) => {
      const { students, sweStudents, csStudents } = data;
      // console.log(students, sweStudents, csStudents);
      res.write(`Number of students: ${students.length}\n`);
      res.write(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}\n`);
      res.write(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
      res.end();
    }).catch((error) => {
      res.end(error.message);
    });
  }
});

module.exports = app.listen(port, hostname, () => {
  console.log(`The sever is running at ${hostname}:${port}`);
});
