const express = require('express');
const cors = require('cors');
const { imageRouter } = require('./routes/imageRoute');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', imageRouter);

app.listen(3001, () => {
  console.log('App listening on port 3001!');
});
