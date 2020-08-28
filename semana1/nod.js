#!/usr/bin/nodejs
const http = require("http");
const hostname = '0.0.0.0';
const port = 3000;

server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end('Hola Mundo esto me parece super loco');
});

server.listen(port, hostname, () => {
  console.log(`EL Servidor está corriendo sobre http://${hostname}:${port}/`);
});
