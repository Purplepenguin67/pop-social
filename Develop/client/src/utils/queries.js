import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me {
    me {
        _id
        username
        email
        posts
        comments
        friends
    }
  }
`;

export const GET_USER = gql`
  query getUser($userId: String!) {
    user(userId: $userId) {
        _id
        username
        email
        posts
        comments
        friends
    }
  }
`;

export const GET_POSTS = gql`
  query getPosts {
    posts {
      _id
      postContent
      imageContent
      upvotes
      createdAt
      user_id
    }
  }
`;

export const GET_COMMENTS = gql`
  query getComments($postId: String!) {
    comments(postId: $postId) {
      _id
      commentContent
      upvotes
      createdAt
      post_id
      user_id
    }
  }
`;

// export const GET_POST = gql`
//   query getPost($postId: String!) {
//     getPost(postId: $postId) {
//         _id
//         postContent
//         imageContent
//         upvotes
//         user_id
//     }
//   }
// `;