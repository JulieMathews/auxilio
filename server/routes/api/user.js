var User = require('../../database/models').User;
var router = require('express').Router();

router.get('/', function(req, res) {
    User.findAll({
         order: [ ['username', 'ASC'] ],
         attributes: [ 'uuid', 'username' ]
        }, )
        .then(users => {
            res.json(users.map(u => u.get()));
        })
        .catch(error => {
            res.status(500).json({error: error});
        });
});

module.exports = router;
