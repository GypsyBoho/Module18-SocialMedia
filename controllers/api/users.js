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
        this.res.json(user);
    } catch (err) {
        this.res.status(500).json(err);
    }
},
};