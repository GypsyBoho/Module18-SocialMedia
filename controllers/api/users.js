const User = require('../models/User');

module.exports = {

// create a new user
async createUser(req, res) {
    try {
        const dbUserData = await User.create(req.body);
        res.json(dbUserData);
    } catch (err) {
        res.status(500).json(err);
    }
},

// get all users
async getUsers(req, res) {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
      res.status(500).json(err)
    }
},

// get user by id
async getSingleUser(req, res) {
    try {
        const user = await User.findOne({ _id: req.params.userId });

        if (!user) {
            return this.res.status(404).json({ message: 'No user with that ID'});
        }
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
},

//update user
async updateUser(req, res) {
    try {
        const user = await User.findOneAndUpdate({_id: req.params.userId}, req.body);
        
        res.json(user);
        } catch (err) {
        res.status(500).json(err);
    }
},

//delete user
async deleteUser(req, res) {
    try {
        const user = await User.findOneAnddelete({_id: req.params.userId}, req.body);
        await Thought.deleteMany({_id: {$in: user.thoughts}}) 
        res.json(user);
    }catch (err) {
        res.status(500).json(err);
    }
},

//add friend
async addFriend(req, res) {
    try {
        const user = await User.findOneAndUpdate({_id: req.params.userId}, {$addToSet: {friends: req.params.friendId}});
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
},
//delete friend
async deleteFriend(req, res) {
    try {
        const user = await User.findOneAndUpdate({_id: req.params.userId}, {$pull: {friends: req.params.friendId}});
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
}
};