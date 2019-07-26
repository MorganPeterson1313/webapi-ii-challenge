const express = require('express');
const db = require('./data/db');

const router = express.Router();






router.get('/now', (request, response) =>{
    const now = new Date().toISOString();
        response.send(now);
        
        });

router.get('/:id', (request, response) => {
    const {id} = request.params;
    db.findById(id)
    .then(post => {
        response.status(200).json(post)

    })
    .catch(err => {
        response.status(500).json({success:false, err})
    });

})



router.get('/', (request, response) => {
    db.find()
    .then(posts => {
        response.status(200).json(posts);
    })
    .catch(err => {
        response.status(500).json({success:false,err})
    });

});



router.post('/',(request, response) => {
        const postInfo = request.body;

        const {title, contents}  = request.body;

        db.insert(postInfo)

        
        .then(post => {
            if(title && contents){

            
            response.status(201).json({success:true, post});
            }else{ response.status(400).json({success:false, message:'Please provide title and contents for the post'})}
        })
        .catch(err =>{
            response.status(500).json({success:false, err});
        });
    
});

router.delete('/:id', (request, response) => {
        const {id} = request.params;
        db.remove(id)
        .then(deleted => {
            if(deleted) {
                response.status(204).end();
            }else{
                response.status(404).json({success:false, message:'the post you are looking for is not here'})
            }
        })
        .catch(err => {
            response.status(500).json({success:false, err})
        });
    });


router.put('/:id', (request, response) => {
            const {id} = request.params;
            const post = {title, contents}  = request.body;

            db.update(id,post)
            .then(updated => {
                if (updated){
                response.status(200).json({success: true, updated});
                }else {response.status(404).json({success:false, message:'the post you are looking for is not here'})
            }
            })
            .catch(err => {
                response.status(500).json({success:false, err})
            });
        

            });



            module.exports = router;