import express from 'express';

const app = express();
const port = 3002;

app.get('/', (req, res) => {
  res.json({test: 'Hello World !'});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
