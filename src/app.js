const express = require('express');
const app = express();


app.get('/', async (req, res, next) => {
  res.status(200).send('Hello World! ')
})

require('./database');

app.listen(3000, () => console.log(' Server sis running on port 5000 - '))

