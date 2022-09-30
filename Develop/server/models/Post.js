const { Schema } = require('mongoose');

const postSchema = new Schema({
  postContent: {
    type: String,
  },
  imageContent: {
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
  user_id: {
    type: String,
  },
  comments: [{
    type: String
  }]
});

module.exports = postSchema;
