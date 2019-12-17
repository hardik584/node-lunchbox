const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//GET BACK ALL THE POSTS
router.get('/', (req, res) => {
    res.send('We are on posts');
});

//SUBMITS A POST
router.post('/', async (req, res) => {
    try {
        const abc = new Post(
            {
                title: req.body.title,
                url: req.body.url,
                description: req.body.description
            }
        );
        abc.save().then(
            data => {
                res.json(data);
            }
        ).catch(err => {
            console.log('This is error ' + err);
        });

    } catch (error) {
        console.log('This is error ' + err);

    }
    console.log(req.body);
});
                                                                                                                                     
//SPECIFIC POST 
router.get('/:title', async (req, res) => {

    try {
        const post = await Post.findById(req.params.title);
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
