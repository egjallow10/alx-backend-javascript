import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const studentData = await readDatabase(process.argv[2]);
      // console.log(studentData);
      response.write('This is the list of our students\n');
      response.write(`Number of students in CS: ${studentData.CS.length}. List: ${studentData.CS.join(', ')}\n`);
      response.write(`Number of students in SWE: ${studentData.SWE.length}. List: ${studentData.SWE.join(', ')}`);
      response.end();
    } catch (error) {
      throw Error(error.message);
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.statusCode = 500;
      request.send('Major parameter must be CS or SWE');
      request.end();
    }
    try {
      const studentData = await readDatabase(process.argv[2]);
      // console.log(studentData);
      if (major === 'CS') {
        response.statusCOde = 200;
        response.write(`List: ${studentData.CS.join(', ')}`);
        response.end();
      } else if (major === 'SWE') {
        response.statusCOde = 200;
        response.write(`List: ${studentData.SWE.join(', ')}`);
        response.end();
      }
    } catch (error) {
      response.statusCode = 500;
      response.send(error.message);
      response.end();
    }
  }
}

export default StudentsController;
