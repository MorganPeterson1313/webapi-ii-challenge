const express = require('express');

const server = express();
server.use(express.json());





server.listen(4000, ()=> {

console.log('server listening on port 4000');


});