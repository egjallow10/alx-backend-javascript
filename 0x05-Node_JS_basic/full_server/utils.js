import fs from 'fs'

export const readDatabase = async (fileName)=>{
  try {
    const data = await fs.promises.readFile(fileName, 'utf8');
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
    return { SWE: sweStudents, CS: csStudents };
  } catch (error) {
    throw Error('Cannot load the database');
  }
}
