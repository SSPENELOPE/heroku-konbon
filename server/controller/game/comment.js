const { Comment } = require('../../models')
const router = require('express').Router();

router.post('/addComment', async (req, res) => {
    const { text, user_id, game_id } = req.body;
    console.log(text, user_id, game_id);
    try {
        const newComment = await Comment.create({
            text: text,
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

router.get('/getCommentsByGame/:id', async (req, res) => {
    const game_id = req.params.id
    try {
        const comments = await Comment.findAll({
            where: {
                game_id: game_id
            }
        })
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({
            message: `${error}`
        })
    }
})

router.delete('/deleteCommentsById/:id', async (req, res) => {
    const id = req.params.id
    await Comment.destroy({
        where: {
            id: id
        }
    })
    res.status(200).json()
})
module.exports = router;