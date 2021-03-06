const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/views'));
// app.use("/styles", express.static(__dirname + '/styles'));
// app.use("/scripts", express.static(__dirname + '/scripts'));

// viewed at based directory http://localhost:8080/
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/index.html'));
});


app.listen(process.env.PORT || 8080);