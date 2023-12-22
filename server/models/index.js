const User = require("./user")
const Comment = require("./comment")
const Rating = require("./ratings")

User.hasMany(Rating, { foreignKey: "user_id", onDelete: "CASCADE" })

User.hasMany(Comment, { foreignKey: "user_id", onDelete: "CASCADE" })

Comment.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" })

Rating.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" })

module.exports = { User, Comment, Rating };