const express = require('express');
const db = require('./data/db');

const router = express.Router();





router.get('/:id/comments', async (request, response) => {
    
    try{
    const comment = await
    db.findPostComments(request.params.id);

    if(comment){
        response.status(200).json(comment)} else {response.status(404).json({success: false, message:'Comment cannot be found'})}

    }
    catch(err)  {
        response.status(500).json({success:false, err})
    }

})



router.get('/:id/comments/:id', async (request, response) => {
               
    const id = request.params.id
    
    try{

        const comment = await
    db.findCommentById(id)
        
        if(comment){

    
        response.status(200).json(comment)} else{response.status(404).json({ success:false, message: 'invalid comment id'})}

    }
    catch(err) {
        response.status(500).json({success:false, err})
    }

})


router.post('/:id/comments', async (request, response) => {
    const commentInfo = {...request.body, post_id: request.params.id}
   try{
    const comment = await
    db.insert(commentInfo)
        response.status(201).json({success:true, comment});
    }
    catch(err){
        response.status(500).json({success:false, err});
    }

});


module.exports = router;