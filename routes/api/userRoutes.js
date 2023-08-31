const router = require('express').Router();
const {
    createUser,
    getUsers,
    getSingleUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require('../../controllers/usersController');

//http://localhost:3001/api/users/
router.route('/').get(getUsers).post(createUser)
// router.route('/users').get(getUsers).post(createUser);

// http://localhost:3001/api/users/64eec73f12b094b731b9d0d6
router
    .route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser)

    //http://localhost:3001/api/users/64eec73f12b094b731b9d0d6/friends/friendID998ujj
router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(deleteFriend)

module.exports = router;

