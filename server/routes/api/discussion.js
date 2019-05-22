var Discussion = require('../../database/models').Discussion;
var express = require('express');
var router = express.Router();

/* Create */

router.post('/new', function (req, res){
    const newPost = new Discussion({ discussion: req.body.discussion });
    newPost.save().then(savedPost => {
        res.json(savedPost)
    })
    .catch(error => {
        res.status(500).json({error: error})
    });
});

router.route('/:id')

/*Update*/
.put((req,res) => {
    Discussion.findById(req.params.id, function (err, discussion){
        if(err){
            console.log("PUT Error: " + err);
            res.status(500).send("Error");
        }else if (discussion) {
            discussion.updatedAt = Date.now();
            discussion.unit = req.body.unit;

            discussion.save(function (){
                pusher.trigger(
                    channel,
                    'updated',
                    {
                        name:"updated",
                        id: discussion._id,
                        date: discussion.updatedAt,
                        discussion: discussion.discussion,
                        unit: discussion.unit,
                    }

                );
                res.status(200).json(discussion);
            });
        }else{
            res.status(404).send("Not Found");
        }
    });
})

/*Delete*/

.delete((req, res) => {
    Discussion.findById(req.params.id, function (err, discussion){
        if (err) {
            console.log('Delete error: ' + err);
            res.status(500).send("error");
         } else if (discussion) {
             discussion.remove(function (){
                 pusher.trigger(
                     channel,
                     "deleted",
                     {
                         name: 'deleted',
                         id: discussion._id,
                         date: discussion.updatedAt ? discussion.updatedAt : discussion.inseretedAt,
                     }
                 );
                 res.status(200).json(discussion);
             });
         } else{
             res.status(404).send('Not found');
         }
    });
});

module.exports = router;

