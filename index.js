require('dotenv').config();
const server = require('./server');
var cors = require('cors')
server.use(cors())

server.get('/api/posts', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
  })


// server.use('api/posts', server);

const port = process.env.PORT ;

server.listen(port, ()=> {

console.log(`server listening on http://localhost:${port}`);


});