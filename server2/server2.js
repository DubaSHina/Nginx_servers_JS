const express = require('express');
const app = express();
const port = 10002;

app.get('/', (req, res) => {
  res.send('Hello_Server_2');
});

app.listen(port, () => {
  console.log(`Server running on port 10002`);
});
