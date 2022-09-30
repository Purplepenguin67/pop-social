const { Schema } = require('mongoose');

const commentSchema = new Schema({
    commentContent: {
        type: String,
    },
    upvotes: {
        type: Integer,
    },
    post_id: {
        type: String,
    },
    user_id: {
        type: String,
    },
});

module.exports = postSchema;
