const mongoose = require("mongoosee");

const postSchema = mongoose.Schema(
    {
        message: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        likers: {
            type: [String]
        }
    },
    {
        timestamps: true
    }
);

module.exports = mangoose.model('post', postSchema)