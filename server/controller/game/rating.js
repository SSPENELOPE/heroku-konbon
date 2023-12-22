const { Rating } = require('../../models')
const router = require('express').Router();

router.post('/addRating', async (req, res) => {
    const { star_rating, user_id, game_id } = req.body;
    console.log(star_rating, user_id, game_id);
    try {
        const newRating = await Rating.create({
            star_rating: star_rating,
            user_id: user_id,
            game_id: game_id
        })
        res.status(200).json({ message: "success" });
    } catch (error) {
        res.status(500).json({
            message: `${error}`
        })
    }

})

router.get('/getRatingByGame/:id', async (req, res) => {
    const game_id = req.params.id
    try {
        const rating = await Rating.findAll({
            where: {
                game_id: game_id
            }
        })
        res.status(200).json(rating);
    } catch (error) {
        res.status(500).json({
            message: `${error}`
        })
    }
});

module.exports = router;