const fs = require('fs');

async function countStudents(path) {
  let data;
  try {
    data = await fs.promises.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.map((line) => {
      const [firstname, lastname, , field] = line.split(',');
      return { firstname, lastname, field };
    });
    const csStudents = students
      .filter((student) => student.field === 'CS')
      .map((student) => student.firstname);
    const sweStudents = students
      .filter((student) => student.field === 'SWE')
      .map((student) => student.firstname);
    console.log(`Number of students: ${students.slice(1).length}`);
    console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
    return { students, sweStudents, csStudents };
  } catch (error) {
    throw Error('Cannot load the database');
  }
}
module.exports = countStudents;
