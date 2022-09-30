const { User, Post, Comment } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    // Query and Mutations Definitions

    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        getUser: async (parent, { id }) => {
            const user = User.findOne({ _id: id });
            return user;
        },
        getPost: async (parent, { id }) => {
            const post = Post.findOne({ _id: id });
            return post;
        },
        getComment: async (parent, { id }) => {
            const comment = Comment.findOne({ _id: id });
            return comment;
        }
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            // Look up the user by the provided email address. Since the `email` field is unique, we know that only one person will exist with that email
            const user = await User.findOne({ email });

            // If there is no user with that email address, return an Authentication error stating so
            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            // If there is a user found, execute the `isCorrectPassword` instance method and check if the correct password was provided
            const correctPw = await user.isCorrectPassword(password);

            // If the password is incorrect, return an Authentication error stating so
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            // If email and password are correct, sign user into the application with a JWT
            const token = signToken(user);

            // Return an `Auth` object that consists of the signed token and user's information
            return { token, user };
        },
        addUser: async (parents, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        addPost: async (parents, { postContent, imageContent }, context) => {
            const newPost = await Post.create({ postContent, imageContent });
            try {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { posts: newPost._id } },
                    { new: true, runValidators: true });
                return updatedUser;
            } catch (err) {
                console.log(err);
            }
        },
        addComment: async (parents, { commentContent }) => {
            const newComment = await Comment.create({ commentContent });
            try {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { comments: newComment._id } },
                    { new: true, runValidators: true });
                return updatedUser;
            } catch (err) {
                console.log(err);
            }
        },
        upvotePost: async (parents, { postId }) => {
            const updatedPost = await Post.findOneAndUpdate(
                { _id: postId },
                { $inc: { upvotes: 1 } },
                { new: true }
            );
            return updatedPost;
        },
        upvoteComment: async (parents, { commentId }) => {
            const updatedComment = await Comment.findOneAndUpdate(
                { _id: commentId },
                { $inc: { upvotes: 1 } },
                { new: true }
            );
            return updatedComment;
        },
        removePost: async (parents, { postId }, context) => {
            const removedPost = await Post.destroy({ _id: postId });
            const updatedUser = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $pull: { posts: { postId } } },
                { new: true }
            );
            return updatedUser;
        },
        removeComment: async (parents, { commentId }, context) => {
            const removedComment = await Comment.destroy({ _id: commentId });
            const updatedUser = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $pull: { comments: { commentId } } },
                { new: true }
            );
            return updatedUser;
        },
    }


    // Query: {
    //     me: async (parent, args, context) => {
    //         if (context.user) {
    //             return User.findOne({ _id: context.user._id });
    //         }
    //         throw new AuthenticationError('You need to be logged in!');
    //     },
    //     User: 
    //     me: async (parent, args, context) => {
    //         if (context.user) {
    //             return User.findOne({ _id: context.user._id });
    //         }
    //         throw new AuthenticationError('You need to be logged in!');
    //     },
    // },
    // Mutation: {
    //     addUser: async (parents, { username, email, password }) => {
    //         const user = await User.create({ username, email, password });
    //         const token = signToken(user);
    //         return { token, user };
    //     },
    //     saveBook: async (parents, { input }, context) => {
    //         try {
    //             const updatedUser = await User.findOneAndUpdate(
    //                 { _id: context.user._id },
    //                 { $addToSet: { savedBooks: input } },
    //                 { new: true, runValidators: true });
    //             return updatedUser;
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     },
    //     removeBook: async (parent, { bookId }, context) => {
    //         const updatedUser = await User.findOneAndUpdate(
    //             { _id: context.user._id },
    //             { $pull: { savedBooks: { bookId: bookId } } },
    //             { new: true }
    //         );
    //         return updatedUser;
    //     },
    //     login: async (parent, { email, password }) => {
    //         // Look up the user by the provided email address. Since the `email` field is unique, we know that only one person will exist with that email
    //         const user = await User.findOne({ email });

    //         // If there is no user with that email address, return an Authentication error stating so
    //         if (!user) {
    //             throw new AuthenticationError('No user found with this email address');
    //         }

    //         // If there is a user found, execute the `isCorrectPassword` instance method and check if the correct password was provided
    //         const correctPw = await user.isCorrectPassword(password);

    //         // If the password is incorrect, return an Authentication error stating so
    //         if (!correctPw) {
    //             throw new AuthenticationError('Incorrect credentials');
    //         }

    //         // If email and password are correct, sign user into the application with a JWT
    //         const token = signToken(user);

    //         // Return an `Auth` object that consists of the signed token and user's information
    //         return { token, user };
    //     },
    // },
};

module.exports = resolvers;