const router = require("express").Router();
const apiRoutes = require('./game/api.js');
const authRoutes = require("./auth/auth.js");
const gameRoutes = require('./game/game.js');

const commentRoutes = require('./game/comment.js')
const ratingRoutes = require('./game/rating.js');

router.use("/auth", authRoutes);
router.use('/games', gameRoutes);
router.use('/comment', commentRoutes);
router.use('/api', apiRoutes);
router.use('/rating', ratingRoutes);
module.exports = router;