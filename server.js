const express = require('express');

const postsRouter = require('./post-router');
const commentsRouter = require('./comment-router');
const server = express();
server.use(express.json());
const cors = require('cors')
server.use(cors())





server.use('/api/posts', postsRouter);
server.use('/api/posts', commentsRouter);


server.get('/', (request, response) => {

response.send('hello world from express');

});


server.get('/api/posts', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
  })


module.exports = server;