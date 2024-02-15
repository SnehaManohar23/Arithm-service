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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
