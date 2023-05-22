const express = require('express');
const studentDetails = require('./3-read_file_async');

const app = express();
const port = '1245';

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const data = await studentDetails(process.argv[2]);
    const { students, sweStudents, csStudents } = data;
    res.statusCode = 200;
    res.write('This is the list of our students\n');
    res.write(`Number of students: ${students.slice(1).length}\n`);
    res.write(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}\n`);
    res.write(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
    res.end();
  } catch (error) {
    res.statusCode = 500;
    res.write('This is the list of our students\n Cannot load the database');
    res.end();
  }
});

module.exports = app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
