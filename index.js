const express = require('express');
const route = require('./app/route');
const ErrorHandlerMiddleware = require('./app/utils/ErrorHandlerMiddleware');
const { PREFIX } = require('./app/config/AppConfig');

const app = express();

const { PORT = 4001 } = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use(PREFIX, route);
app.use(ErrorHandlerMiddleware.MainHandler);


app.listen(PORT, () => {
  console.log('listening on port:', PORT);
});

module.exports = app;
