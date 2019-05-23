var express = require("express")
var Article = require('../database/models').Article;
const router = express.Router()




    router.get("/", function(req, res) {
        Article.findAll().then(articles => {
            res.json(articles);
        });
    });

    router.get("/:id", function(req, res) {
        Article.findByPk(req.params.id).then(article => {
            res.json({article: article.get({plain: true})});
        });
    });


    
    module.exports = router
