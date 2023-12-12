const express = require("express");
const cors = require("cors");
const connectToDatabase = require("./config/database");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(cookieParser());
app.use(cors());
const indexRoute = require("./routes/index");

connectToDatabase();
app.use("/api/v1", indexRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
