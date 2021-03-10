const router = require('express').Router();
const { Post, User } = require('../../models');

// get all users
router.get('/', (req, res) => {
    console.log('================');
    Post.findAll({
        // Query config
        attributes: ['id', 'post_url', 'title', 'created_at'],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    // Query Promise
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;