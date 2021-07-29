//this file will serve as a means to collect all of the API routes and package them up for use.
const router = require("express").Router();
const Vote = require("./Vote");
const userRoutes = require("./user-routes.js");
const postRoutes = require("./post-routes");
const { User, Post } = require("../../models");

router.use("/users", userRoutes);
router.use("/posts", postRoutes);

User.belongsToMany(Post, {
  through: Vote,
  as: "voted_posts",
  foreignKey: "user_id",
});

Post.belongsToMany(User, {
  through: Vote,
  as: "voted_posts",
  foreignKey: "post_id",
});

Vote.belongsTo(User, {
  foreignKey: "user_id",
});

Vote.belongsTo(Post, {
  foreignKey: "post_id",
});

User.hasMany(Vote, {
  foreignKey: "user_id",
});

Post.hasMany(Vote, {
  foreignKey: "post_id",
});

module.exports = { router, User, Post, Vote };
