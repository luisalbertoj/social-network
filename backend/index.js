const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/db");
const User = require("./routes/user");
const Auth = require("./routes/auth");
const Post = require("./routes/post");
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/user", User);
app.use("/api/auth", Auth);
app.use("/api/post", Post);
dbConnection();

app.listen(process.env.PORT, () => console.log("Server run, on port: ", process.env.PORT));