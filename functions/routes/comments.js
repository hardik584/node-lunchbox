const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

router.get('/',async (req,res)=>{
    console.log('We are on commnets ');

    try {
        const posts = await Comment.find();
        res.json(posts);
        console.log('commnets '+posts);
    } catch (error) {
        console.log('commnets error'+error);

        res.send({message:error});

    }
});

router.get('/:commentId', async (req, res) => {
    try {
        const posts = await Comment.findById(req.params.commentId);
        res.json(posts);
    } catch (error) {
        res.json({ message: error });
    }

    console.log(' Comments   kjsdfhlkjslf[[[[[[[[[[[[[[[');
    res.json(posts);
});

module.exports = router;