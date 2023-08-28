const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
    {
        username: [
            {
                type: String,
                required: true
            },
        ],
        email: String
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
);

module.exports = mongoose.model('User', userSchema);