const express = require('express');
const cors = require('cors');

const cl = require('./router.js');

const server = express();

server.use(express.json());
server.use(cors());

server.use('/api', cl);

module.exports = server