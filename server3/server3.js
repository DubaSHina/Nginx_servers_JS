const express = require('express');
const app = express();
const port = 10003;

app.get('/', (req, res) => {
  res.send('Hello_Server_3');
});

app.listen(port, () => {
  console.log(`Server running on port 10003`);
});
