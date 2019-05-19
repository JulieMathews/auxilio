const router = require('express').Router();
const userRoutes = require("./user");
const articleRoutes = require("./articles");
const postRoutes = require("./post");

//User routes

router.use("/user", userRoutes);
router.use("/articles", articleRoutes);
router.use("/posts", postRoutes);




module.exports = router;