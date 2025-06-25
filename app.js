// app.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (_, res) => {
  res.send('Hello from Docker and GitHub Actions!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
