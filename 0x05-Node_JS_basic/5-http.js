const http = require('http')

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  // eslint-disable-next-line no-empty
  } else if (req.url === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
  }
});

module.exports = app.listen(port, hostname, ()=>{
  console.log(`The sever is running at ${hostname}:${port}`);
})