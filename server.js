const express = require('express');
const db = require('./data/db');
const postsRouter = require('./post-router');
const server = express();
server.use(express.json());

server.use('/api/posts', postsRouter);

server.get('/', (request, response) => {

response.send('hello world from express');

});



server.get('/api/posts/:id/comments', (request, response) => {
    const {postId} = request.params;
    db.findPostComments(postId)
    .then(post => {
        response.status(200).json(post)

    })
    .catch(err => {
        response.status(500).json({success:false, err})
    });

})



sever.get('/api/comments/:id', (request, response) => {
    const {id} = request.params.id;
    db.findCommentById(id)

    .then(comment => {
        response.status(200).json(comment)

    })
    .catch(err => {
        response.status(500).json({success:false, err})
    });

})


server.post('/api/posts/:id/comments',(request, response) => {
    const commentInfo = request.body;
    db.insert(commentInfo)
    .then(comment => {
        response.status(201).json({success:true, comment});
    })
    .catch(err =>{
        response.status(500).json({success:false, err});
    });

});

module.exports = server;