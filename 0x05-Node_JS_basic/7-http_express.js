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
    //     This is the list of our students
    // Number of students: 10
    // Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
    // Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
    res.send(`This is the list of our students\nNumber of students: ${students.slice(1).length}\nNumber of students in CS: ${csStudents.length}. List: ${csStudents.join(
      ', ',
    )}\nNumber of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(
      ', ',
    )}`);
  } catch (error) {
    res.status(200).send(error.message);
  }
});

module.exports = app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
