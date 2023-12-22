const fs = require('fs');
const path = require('path');
const game = require('../../data/game.json')
const router = require('express').Router();

router.get('/allGames', async (req, res) => {
    try {
        const filepath = path.join(__dirname, '../../data/game.json');
        const data = fs.readFileSync(filepath);
        const gameData = JSON.parse(data);
        return res.status(200).json(gameData);
    } catch (error) {
        return res.status(500).json(error);
    }
});

module.exports = router;