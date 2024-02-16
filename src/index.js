const express = require("express");
const cors = require("cors");
const {add} =require("./arithmetica")
const app = express();
const port = 3001;

app.use(cors());

// app.get("/", (req, res) => {
//   res.send("Arithmetic service - Hello world!");
// });

// New route for adding two numbers
app.get("/add/:n/:m", (req, res) => {
  // Extracting two numbers from query parameters
  let n=Number(req.params.n);
  let m=Number(req.params.m);
  let sum=add(n,m);
    res.json(sum);
  
});

app.get("/subtract/:n/:m", (req, res) => {
  let n = Number(req.params.n);
  let m = Number(req.params.m);
  let result = subtract(n, m);
  res.json({ result });
});

app.get("/multiply/:n/:m", (req, res) => {
  let n = Number(req.params.n);
  let m = Number(req.params.m);
  let result = multiply(n, m);
  res.json({ result });
});

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
