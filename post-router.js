const express = require('express');
const db = require('./data/db');

const router = express.Router();






router.get('/now', (request, response) =>{
    const now = new Date().toISOString();
        response.send(now);
        
        });




router.get('/', async (request, response) => {
    
        try{
            const posts = await
db.find(request.query);
    
        response.status(200).json(posts);
        }
    catch (err) {
        response.status(500).json({success:false,err})
    }

});



router.get('/:id', async (request, response) => {
    

    try{
        const post = await
    db.findById(request.params.id)
if(post){
        response.status(200).json(post)
}else{ response.status(404).json({message:'Post not found'})}
    }
    catch(err ) {
        response.status(500).json({success:false, err})
    }

})



router.post('/', async (request, response) => {
        // const postInfo = request.body;

        // const {title, contents}  = request.body;
            try{
                const post = await
        db.insert(request.body)
            if(title && contents){

            
            response.status(201).json({success:true, post});
            }else{ response.status(400).json({success:false, message:'Please provide title and contents for the post'})}
            }
        catch(err ){
            response.status(500).json({success:false, err});
        }
    
});

router.delete('/:id', async (request, response) => {
        try{

            const deleted = await
        db.remove(request.params.id)
            if(deleted) {
                response.status(204).end();
            }else{
                response.status(404).json({success:false, message:'the post you are looking for is not here'})
            }
        }
        catch(err) {
            response.status(500).json({success:false, err})
        }
    });


router.put('/api/posts/:id', async (request, response) => {
            try{
                const updated = await
            db.update(request.params.id, request.body)
                if (updated){
                response.status(200).json({success: true, updated});
                }else {response.status(404).json({success:false, message:'the post you are looking for is not here'})
            }
        }
            catch(err){
                response.status(500).json({success:false, err})
            }
        

            });



            module.exports = router;