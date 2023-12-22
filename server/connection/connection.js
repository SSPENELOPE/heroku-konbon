const { Sequelize } = require("sequelize");
require("dotenv").config();

let sequelize;

// Check if the app is running in a production environment (Heroku)
if (process.env.NODE_ENV === 'production') {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // Use local development configuration
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  });
}

module.exports = sequelize;
