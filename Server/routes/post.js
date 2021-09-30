const express = require('express');
const router = express.Router();
const fetchUser = require('../Middleware/fetchuser');
const Post = require('../Models/Post');

const { body, validationResult } = require('express-validator');



//route for fetching all the posts by current user

router.get('/getpost', fetchUser, async (req, res) => {

    try {
        const userPost = await Post.find({user : req.user.id})
        res.json(userPost);
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error")
    }
   
});


//route for adding the post by current user

router.post('/createpost', fetchUser, [

    body('heading', 'Enter valid heading'),
    body('description', "Enter valid description").isLength({ min: 5 })

], async (req, res) => {


    try {
        const { heading, description } = req.body;

        // if there are errors then check it using validation
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        //if we there are no errors then we create a new post using mongoose
        const post = new Post({
            description, heading, user: req.user.id
        })
        const savedPost = await post.save();
        res.json(savedPost);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error")

    }
})

//route to get global data for the website

router.get('/globaldata', async (req, res) => {

    try {
        const allposts = await Post.find({});
        res.json(allposts);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error")
    }

})

//update the post if the user is valid use PUT request to update the changes
router.put('/updatepost/:id', fetchUser, async (req, res) => {

    const { heading, description } = req.body;

    const newPost = {};

    if (heading) { newPost.heading = heading };
    if (description) { newPost.description = description };

    //find the Post and update it.
    let post = await Post.findById(req.params.id);

    //if post is not found with the id provided means post is not available
    if (!post) {
        return res.status(404).send("Not Found");
    }

    //check if the id matches with the correct id of user if not access denied
    if (post.user.toString() !== req.user.id) {
        return res.send(401).send("Not Allowed");
    }

    post = await Post.findByIdAndUpdate(req.params.id, { $set: newPost }, { new: true })
    res.json(post);

});


//routes for deleting an post if user is logged in
router.delete('/deletepost/:id', fetchUser, async (req, res) => {


    try {
        //find the Post and update it.
        let post = await Post.findById(req.params.id);

        //if post is not found with the id provided means post is not available
        if (!post) {
            return res.status(404).send("Not Found");
        }

        //check if the id matches with the correct id of user if not access denied
        if (post.user.toString() !== req.user.id) {
            return res.send(401).send("Not Allowed");
        }

        post = await Post.findByIdAndDelete(req.params.id)
        res.json({ "success": "Post deleted successfully", post: post });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error")
    }


});


module.exports = router;

