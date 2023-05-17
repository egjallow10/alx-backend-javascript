const http = require('http');

const localhost = '127.0.0.1';
const port = 1234;

const app = http.createServer((req, res) => {
//   if (req.url === '/' || req.url === '/any_endpoint') {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
//   }
});

module.exports = app.listen(port, localhost, () => {
  console.log(`Server is running ${port}`);
});
