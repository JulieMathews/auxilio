var models = require("../../database/models");
var router = require("express").Router();

const defaultOpts = {
  include: [
    {
      model: models.User,
      attributes: [ 'uuid', 'username', 'email' ]
    }
  ],
  attributes: [ 'id', 'title', 'message', 'parentId', 'createdAt' ]
};

router.post("/", function(req, res) {
  var post = models.Post.build(req.body);
  post.set('userUuid', req.user.uuid);
  post.save()
    .then(newPost => {
      return models.Post.findByPk(newPost.id, defaultOpts);
    })
    .then(postData => {
      res.json(postData.get());
    });
});

router.get("/", function(req, res) {
  const parentId = req.query.parentId;
  models.Post.findAll({
    ...defaultOpts,
    ...{
        where: { parentId: typeof parentId === 'undefined' ? null : parentId },
        limit: 20,
        order: [ ['createdAt', 'DESC'] ]
      }
    })
    .then(posts => {
      res.json(posts.map(p => p.get()));
    });
});

module.exports = router;
