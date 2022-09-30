const { Schema } = require('mongoose');

const commentSchema = new Schema({
    commentContent: {
        type: String,
    },
    upvotes: {
        type: Integer,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    post_id: {
        type: String,
    },
    user_id: {
        type: String,
    },
});

module.exports = postSchema;
