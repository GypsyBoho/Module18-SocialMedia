const Thoughts = require('../models/Thought');

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
            const thought = await Thoughts.findOne({_id: req.params.thoughtId});

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
            const thought = await Thoughts.findOneAndUpdate({_id: req.params.thoughtId}, req.body);

            res.json(thought);
            } catch (err) {
                res.status(500).json(err);
            }
    },

    // delete a thought
    async deleteThought(req, res) {
        try {
            const thought = await Thoughts.findOneAndDelete({_id: req.params.thoughtId}, req.body);
            await reactionSchema.deleteMany({_id: {$in: thoughts.reaction}})
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //create reaction to single thought
    async addReaction(req, res) {
        try {
            const thoughts = await Thought.findOneAndUpdate({_id: req.params.thoughtId}, {$addToSet: {reaction: req.params.reactionId}});
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //delete reaction
    async deleteReaction(req, res) {
        try {
            const thoughts = await Thought.findOneAndUpdate({_id: req.params.thoughtsId}, {$pull: {reaction: req.params.reactionId}});
            res.jason(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    }
};