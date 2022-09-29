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
  user_id: {
    type: String,
  },
});

module.exports = postSchema;
