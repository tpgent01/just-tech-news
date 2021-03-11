const User = require('./User');
const Post = require('./Post');
const Vote = require('./Vote');

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
});
  
Post.belongsToMany(User, {
    // connect Post and User through Vote, we want the foreignKey to be in Vote, and the model should be displayed as vote_posts when queried on.
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
});

// connects Votes to User by foriegnKey
Vote.belongsTo(User, {
    foreignKey: 'post_id'
});

Vote.belongsTo(Post, {
    foreignKey: 'post_id'
});

// connects user to vote by foriegnKey
User.hasMany(Vote, {
    foreignKey: 'user_id'
});

Post.hasMany(Vote, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Vote };