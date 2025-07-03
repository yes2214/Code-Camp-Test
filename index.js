const express = require('express');
const app = express();
const port  = 3000;
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/home.html');
}
app.listen(port, () =>){
  res.sendFile(__dirname + '/home.html');
});
console.log(`Example app listening at http://localhost:${port}`);
});


