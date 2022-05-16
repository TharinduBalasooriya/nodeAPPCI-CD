const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  let result="Hello World!"
  res.send(result);
});

app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);