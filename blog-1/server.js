const http = require('http');
const serverHandler = require('./index');

const server = http.createServer(serverHandler);

server.listen(3000);
