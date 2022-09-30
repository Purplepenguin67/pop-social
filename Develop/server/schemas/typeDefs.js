const { gql } = require('apollo-server-express');

// typeDefs formatted according to challenge instructions

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    posts: [Post]!
    comments: [Comment]!
  }

  type Post {
    postContent: String!
    imageContent: String
    upvotes: Integer
    user_id: String
  }

  type Comment {
    commentContent: String!
    upvotes: Integer
    post_id: String
    user_id: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User,
    getUser(userId: String!): User
    getPost(postId: String!): Post
    getComment(commentId: String!): Comment
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(postContent: String!, imageContent: String): Post
    addComment(commentContent: String!): Comment
    upvotePost(postId: String!): Post
    upvoteComment(commentId: String!): Comment
    removePost(postId: String!): User
    removeComment(commentId: String!): User
  }
`;

module.exports = typeDefs;