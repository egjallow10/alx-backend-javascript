class AppController {
  // constructor();
  static getHomePage(request, response) {
    response.statusCode = 200;
    response.send('Hello Holberton School!');
    response.end();
  }
}

export default AppController;
