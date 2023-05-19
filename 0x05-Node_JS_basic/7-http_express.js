const express = require('express');
const studentDetails = require('./3-read_file_async');

const app = express();
const port = '1245';

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const data = await studentDetails(process.argv[2]);
    const { students, sweStudents, csStudents } = data;
<<<<<<< HEAD
    res.statusCode = 200;
    res.setHeader('content-Type', 'text/plain');
    //     This is the list of our students
=======
    
    
>>>>>>> f2e2678a28642aa4e7666c2a06da42258b20ea43
    // Number of students: 10
    // Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
    // Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
    res.send(`This is the list of our students\nNumber of students: ${students.slice(1).length}\nNumber of students in CS: ${csStudents.length}. List: ${csStudents.join(
      ', ',
    )}\nNumber of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(
      ', ',
    )}`);
  } catch (error) {
    res.status(200).write(error.message);
    res.end();
  }
});

module.exports = app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
