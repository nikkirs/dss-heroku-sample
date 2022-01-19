const express = require('express');
var path = require("path");

const app = express();

app.use(express.json());

app.use(express.static(__dirname));
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

const port = process.env.PORT || '5000';
app.listen(port, () => console.log(`Server started on Port ${port}`));