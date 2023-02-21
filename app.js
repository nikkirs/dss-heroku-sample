const express = require('express');
var path = require("path");

const app = express();

app.use(express.json());

app.use(express.static(__dirname));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get('/tracking', function (req, res) {
  res.sendFile(path.join(__dirname + "/tracking.html"));
});

app.get('/curbside', function (req, res) {
  res.sendFile(path.join(__dirname + "/curbside.html"));
});

app.get('/return', function (req, res) {
  res.sendFile(path.join(__dirname + "/return.html"));
});

const port = process.env.PORT || '5000';

const server = app.listen(port, () => {
  const port = server.address().port;
  console.log(`Express is working on port ${port}`);
});
