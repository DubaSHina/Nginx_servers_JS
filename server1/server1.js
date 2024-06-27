const express = require('express');
const app = express();
const port = 10001;

app.get('/', (req, res) => {
  res.send('Hello_Server_1');
});

app.listen(port, () => {
  console.log(`Server running on port 10001`);
});
