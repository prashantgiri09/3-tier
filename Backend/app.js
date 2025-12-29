const express = require("express");
const mysql = require("mysql2");

const app = express();
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: "admin",
  password: "Prashant9998",
  database: "database-1"
});

app.get("/health", (req, res) => {
  res.json({ status: "Backend is healthy" });
});

app.get("/users", (req, res) => {
  db.query("SELECT NOW() as time", (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});
