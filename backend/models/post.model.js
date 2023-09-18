const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
    {
        message: {
            type: String,
            required: true
        },
        author: {
            // type: String,
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        likers: {
            type: [String]
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('post', postSchema)