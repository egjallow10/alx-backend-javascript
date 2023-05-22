import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const studentData = await readDatabase();
      response.send(200);
      response.write('This is the list of our students\n');
      response.write(`Number of students in CS: ${studentData.CS.length}. List: ${studentData.CS.join(', ')}`);
      response.write(`Number of students in SWE: ${studentData.SWE.length}. List: ${studentData.SWE.join(', ')}`);
    } catch (error) {
      throw Error('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const major = request.params;
    const studentData = await readDatabase();
    if (!major === 'CS' && 'SWE') {
      response.statusCode(500);
      request.write('Major parameter must be CS or SWE');
      request.end();
    }
    try {
      if (major === 'CS') {
        response.status(200).send(`Number of students in CS: ${studentData.CS.length}. List: ${studentData.CS.join(', ')}`);
      } else if (major === 'SWE') {
        response.send(`Number of students in SWE: ${studentData.SWE.length}. List: ${studentData.SWE.join(', ')}`);
      }
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
