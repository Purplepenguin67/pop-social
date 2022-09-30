import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($postContent: String!, $imageContent: String) {
    addPost(postContent: $postContent, imageContent: $imageContent) {
        _id
        postContent
        imageContent
        createdAt
        upvotes
        user_id
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($commentContent: String!) {
    addComment(commentContent: $commentContent) {
        _id
        commentContent
        upvotes
        createdAt
        user_id
        post_id
    }
  }
`;

export const UPVOTE_POST = gql`
mutation upvotePost($postId: String!) {
    upvotePost(postId: $postId) {
        _id
        postContent
        imageContent
        createdAt
        upvotes
        user_id
    }
  }
`;

export const UPVOTE_COMMENT = gql`
mutation upvoteComment($commentId: String!) {
    upvoteComment(commentId: $commentId) {
        _id
        commentContent
        upvotes
        createdAt
        user_id
        post_id
    }
  }
`;

export const REMOVE_POST = gql`
mutation removePost($postId: String!) {
    removePost(postId: $postId) {
        _id
        username
        email
        posts
        comments
        friends
    }
  }
`;

export const REMOVE_COMMENT = gql`
mutation removeComment($commentId: String!) {
    removeComment(commentId: $commentId) {
      _id
      username
      email
      posts
      comments
      friends
    }
  }
`;

export const ADD_FRIEND = gql`
mutation addFriend($_id: String!, $userId: String!) {
    addFriend(_id: $_id, userId: $userId) {
      _id
      username
      email
      posts
      comments
      friends
    }
  }
`;
