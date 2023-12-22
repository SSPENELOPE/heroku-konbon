const sequelize = require("../connection/connection.js")
const { User, Comment, Rating } = require("../models")
const userData = require("./userdata.json")
const commentData = require("./commentdata.json")
const ratingData = require("./ratingdata.json")

const seedDatabase = async () => {

  await sequelize.sync({ force: true })

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const comments = await Comment.bulkCreate(commentData, {
    returning: true,
  });

  const rating = await Rating.bulkCreate(ratingData, {
        returning: true
    });

  console.log(comments.length, "Comments created")
  console.log(users.length, "Users created.")
  console.log(rating.length, "Ratings created.")
  console.log(comments.length, "Comments created");

  process.exit(0);
};

seedDatabase();