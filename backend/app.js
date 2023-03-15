const config = require('./utils/config');
const express = require('express');
const app = express();
const cors = require('cors');
const middleware = require('./utils/middleware');
const logger = require('./utils/logger');
const mongoose = require('mongoose');
const todoSchema = require('./controllers/todos');

mongoose.set('strictQuery', false);

logger.info('connecting to', config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB');
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message);
  });

app.use(cors());
app.use(express.static('build'));
app.use(express.json());
app.use(middleware.requestLogger);

app.get('/', (request, response) => {
  response.send('<h1>Hello World 12345</h1>');
});

app.use('/api/todos', todoSchema);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
