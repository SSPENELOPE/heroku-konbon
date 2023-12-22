const router = require('express').Router();
require("dotenv").config();
const { Comment, Rating } = require('../../models')
const apiKey = process.env.RAWG_KEY

router.get('/gameById/:id', async (req,res) => {
    try {
        const gameId = req.params.id
        const url = `https://api.rawg.io/api/games/${gameId}?key=${apiKey}`;

        const response = await fetch(url, {
            method: 'GET'
        });

        const gameData = await response.json();

        const comments = await Comment.findAll({
            where: { game_id: gameId },
        });
        const konbon_rating = await Rating.findAll({
            where: {
                game_id: gameId
            }
        })
        const responseData = {
            ...gameData,
            comments,
            konbon_rating
        };

        return res.status(200).json(responseData)
    } catch (error) {
        return res.status(500).json({ message: `${error}`});
    }
});

router.get('/allGames/:page', async (req,res) => {
    try {
        const apiKey = process.env.RAWG_KEY
        const pageNum = req.params.page
        const url = `https://api.rawg.io/api/games?key=${apiKey}&page=${pageNum}`;

        const response = await fetch(url, {
            method: 'GET'
        });

        const gameData = await response.json();

        console.log(gameData)
        return res.status(200).json(gameData.results)
    } catch(error) {
        return res.status(500).json({ message:`${error}` });
    }
})

module.exports = router;