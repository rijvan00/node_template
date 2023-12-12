// config/database.js
const mongoose = require("mongoose");
const config = require("./index");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(config.database.connectionUri);
    console.log(`Connected to the database ${config.database.connectionUri}`);
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    process.exit(1);
  }
};

module.exports = connectToDatabase;
