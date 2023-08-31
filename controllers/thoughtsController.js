const { Thought } = require('../models/index.js');

module.exports = {

    // create a new thought
    async createThought(req, res) {
        try {
            const dbThoughtData = await Thought.create(req.body);
            res.json(dbThoughtData);
        } catch (err) {
            res.status(500).json(err);
        }
    }, 

    //get all thoughts
    async getThoughts(req, res) {
        try {
            const thought = await Thought.find();
            res.json(thought);
        } catch (err) {
            res.status(500).json(err)
        }
    },

    // get thought by id
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({_id: req.params.thoughtId});

            if(!thought) {
                return this.res.status(404).json({ message: 'No thought with that ID'});
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    
    // update a thought
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate({_id: req.params.thoughtId}, req.body, { new: true });

            res.json(thought);
            } catch (err) {
                res.status(500).json(err);
            }
    },

    // delete a thought
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({_id: req.params.thoughtId}, req.body, { new: true });
            await reactionSchema.deleteMany({_id: {$in: thoughts.reaction}})
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //create reaction to single thought
    async addReaction(req, res) {
        try {
            console.log(req.params);
            const thoughts = await Thought.findOneAndUpdate({_id: req.params.thoughtId}, {$addToSet: {reactions: req.body}}, { new: true });
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //delete reaction
    async deleteReaction(req, res) {
        try {
            console.log(req.params);
            const thoughts = await Thought.findOneAndUpdate({_id: req.params.thoughtId}, {$pull: {reactions: {reactionId: req.params.reactionId}}}, { new: true });
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};