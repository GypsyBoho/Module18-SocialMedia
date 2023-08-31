const router = require('express').Router();
const {
    createThought,
    getThoughts,
    getSingleThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
} = require('../../controllers/thoughtsController');

// http://localhost:3001/api/thoughts/
router.route('/').get(getThoughts).post(createThought);

// http://localhost:3001/api/thoughts/thoughtsId38LDJLJSDLJDJ
router
    .route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought)

router.route('/:thoughtId/reactions')
.post(addReaction)

router.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction)

module.exports = router;

