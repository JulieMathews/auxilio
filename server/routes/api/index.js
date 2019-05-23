const router = require('express').Router();
const discussionRoutes = require("./discussion");
const userRoutes = require("./user");
const conversationsRouter = require("./conversations");

//User routes
router.all("*", function(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).send("Unauthenticated");
});
//passport.authenticate("local"));
router.use("/users", userRoutes);
router.use("/discussion", discussionRoutes);
router.use("/conversations", conversationsRouter);


module.exports = router;