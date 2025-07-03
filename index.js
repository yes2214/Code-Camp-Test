const express = require('express');
const app = express();
const port  = 3000;
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
}
app.listen(port, () =>){
  res.sendFile(__dirname + '/Strawberry Icecream');
});
console.log(`Example app listening at http://localhost:${port}`);
});
 const express = require('express');
const app = express();
const port  = 3000;
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/home2.html');
}
app.listen(port, () =>){
  res.sendFile(__dirname + '/Ingredients');
});
console.log(`Example app listening at http://localhost:${port}`);
});
const express = require('express');
const app = express();
const port  = 3000;
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/home3.html');
}
app.listen(port, () =>){
  res.sendFile(__dirname + '/Some places to buy');
});
console.log(`Example app listening at http://localhost:${port}`);
});
 


