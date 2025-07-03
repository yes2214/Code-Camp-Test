const express = require('express');
const app = express();
const port  = 3000;
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/home2.html');
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/home3.html');
}
app.listen(port, () =>){
  console.log(`Example app listening at http://localhost:${port}`);
});



