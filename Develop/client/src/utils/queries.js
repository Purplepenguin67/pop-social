import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me {
    me {
        _id
        username
        email
        posts {
            _id
            postContent
            imageContent
            upvotes
            user_id
        }
        comments {
            _id
            commentContent
            upvotes
            user_id
            post_id
        }
    }
  }
`;

export const GET_USER = gql`
  query getUser($userId: String!) {
    getUser(userId: $userId) {
        _id
        username
        email
        posts {
            _id
            postContent
            imageContent
            upvotes
            user_id
        }
        comments {
            _id
            commentContent
            upvotes
            user_id
            post_id
        }
    }
  }
`;

export const GET_COMMENT = gql`
  query getComment($commentId: String!) {
    getComment(commentId: $commentId) {
        _id
        commentContent
        upvotes
        user_id
        post_id
    }
  }
`;

export const GET_POST = gql`
  query getPost($postId: String!) {
    getPost(postId: $postId) {
        _id
        postContent
        imageContent
        upvotes
        user_id
    }
  }
`;