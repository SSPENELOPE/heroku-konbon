const express = require("express");

const sequelize = require("./connection/connection.js");
const cors = require("cors");
const routes = require("./controller");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors({
  credentials: true,
  origin: "https://konbob-frontend-000a1bc4c546.herokuapp.com",
  methods: ['POST', 'GET', 'PUT', 'DELETE', "OPTIONS"],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

app.use(routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const startServer = async () => {
  try {
    // Ensure the database connection is established before starting the server
    await sequelize.authenticate();
    console.log("Connection to the database has been established successfully.");

    // await sequelize.sync();

    await sequelize.sync({ force: false });

    app.listen(PORT, () => {
      console.log(`Now listening on port: ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

// Call the function to start the server
startServer();
