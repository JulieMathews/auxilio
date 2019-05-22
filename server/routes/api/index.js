const router = require('express').Router();
const discussionRoutes = require("./discussion");

//User routes

router.use("/discussion", discussionRoutes);



module.exports = router;