const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const connect = require("./configs/db");
const userController = require("./controllers/user.controller");
const { register, login, newToken } = require("./controllers/auth.controller");

app.post("/register", register);
app.post("/login", login);

app.use("/user", userController);

app.listen(8080, async () => {
    try {
        await connect();
        console.log("Listening on port 8080");
    } catch (error) {
        console.log('error:', error)
    }
})