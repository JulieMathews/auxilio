var models = require("../../database/models");
var router = require("express").Router();

router.post("/", function(req, res) {
    const meUuid = req.user.uuid;
    const otherUuid = req.body.other;
    console.log("Me: " + meUuid + " Other: " + otherUuid);
    models.User
        .findByPk(otherUuid)
        .then(user => {
            if (!user) {
                throw Error("No user with id " + otherUuid);
            }
            const [user1Uuid, user2Uuid] = [meUuid, otherUuid].sort()
            return models.Conversation
                .findOrCreate({
                    where: { user1Uuid: user1Uuid, user2Uuid: user2Uuid }
                })
        })
        .then(([convo, created]) => {
            if (created) {
                console.log("Created new conversation!");
            }
            console.log("Returning conversation:")
            console.log(convo);
            res.json(convo.get());
        })
        .catch(error =>  {
            res.status(500).json({error: error});
        });
});

module.exports = router;