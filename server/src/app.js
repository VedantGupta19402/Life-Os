const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const userRoutes = require("./routes/userroutes");
const energyRoutes = require("./routes/entryroutes");

const app = express();

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true
    })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use('/api/entries',energyRoutes);

module.exports = app;