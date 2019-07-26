const express = require('express');

const postsRouter = require('./post-router');
const commentsRouter = require('./comment-router');
const server = express();
server.use(express.json());

server.use('/api/posts', postsRouter);
server.use('/api/comments', commentsRouter);


server.get('/', (request, response) => {

response.send('hello world from express');

});





module.exports = server;