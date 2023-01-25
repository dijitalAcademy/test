'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const verifyUser = require('./auth/authorize.js');

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(verifyUser);

app.get('/test', (request, response) => {
  response.send(request.user);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
