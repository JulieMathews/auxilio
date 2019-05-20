var Post = require('../database/models').Post;
const express = require('express')
const router = express.Router()

    router.get("/community-forum", function(req, res) {
        Post.findAll().then(posts => {
            res.json('layouts/communityForum', { posts: posts }
        )});
    });

    router.get("/forum/:id", function(req, res) {
        db.Forum.findByPk(req.params.id).then(forum => {
            res.json('singlePost', {forum: forum}
        )});
    });

    router.post("/community-forum/insertOne"), function(req, res){
        db.Forum.insertOne([
            "message"],
       [
           req.body.message],

            function(result){
                res.redirect("/");
            });
            
    };

module.exports = router