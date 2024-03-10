require('dotenv').config();
const express = require("express");
const cors = require("cors");
const { add, subtract, multiply, divide, isPrime } = require("./arithmetica"); // Assuming isPrime function is exported from arithmetica.js
const app = express();

app.use(cors());
const path = require('path');

if(!process.env.PORT){
  throw new Error('Please specify the port number for the HTTP server with the environment variable PORT');
}

const port=process.env.PORT;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

// New route for checking if a number is prime
app.get("/isPrime/:n", (req, res) => {
  let n = Number(req.params.n);
  let result = isPrime(n);
  res.json({ result });
});

// Route for adding two numbers
app.get("/add/:n/:m", (req, res) => {
  // Extracting two numbers from query parameters
  let n = Number(req.params.n);
  let m = Number(req.params.m);
  let result = add(n, m);
  res.json({ result });
});

// Route for subtracting two numbers
app.get("/subtract/:n/:m", (req, res) => {
  let n = Number(req.params.n);
  let m = Number(req.params.m);
  let result = subtract(n, m);
  res.json({ result });
});

// Route for multiplying two numbers
app.get("/multiply/:n/:m", (req, res) => {
  let n = Number(req.params.n);
  let m = Number(req.params.m);
  let result = multiply(n, m);
  res.json({ result });
});

// Route for dividing two numbers
app.get("/divide/:n/:m", (req, res) => {
  let n = Number(req.params.n);
  let m = Number(req.params.m);

  // Check for division by zero
  if (m === 0) {
    res.status(400).json({ error: "Cannot divide by zero." });
    return;
  }

  let result = divide(n, m);
  res.json({ result });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
           