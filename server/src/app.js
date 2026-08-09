const express = require("express");
const cors = require("cors");
const { register, login } = require("./controllers/user.controller");

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/auth/register", register);
app.post("/api/auth/login", login);

module.exports = app;
