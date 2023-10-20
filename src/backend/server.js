const express = require('express');
const cors = require('cors');

const openAi = require('./api');

const server = express();

server.use(express.json());
server.use(cors());

server.use('/api', openAi);

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    });
  });

module.exports = server