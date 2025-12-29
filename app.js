const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello! This app is running inside a Docker container from ACR.\n');
});

server.listen(8080, '0.0.0.0', () => {
  console.log('Server running on port 8080');
});