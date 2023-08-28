const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            trim: true,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, "Must match a valid email address"]
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "thoughts", //this has to match the name in the Thoughts schema

            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "user",
            }
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);
userSchema.virtual('friendCount').get(function(){
    return this.friends.length;
});

module.exports = mongoose.model('user', userSchema);