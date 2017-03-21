const env = process.env.NODE_ENV || 'development',
  DEV = env === 'development',
  dotenv = require('dotenv').config(),
  express = require('express'),
  app = express(),
  path = require('path'),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  port = process.env.PORT || 8080;

app.set('superSecret', 'tacocat');
app.use(logger(DEV ? 'dev' : 'common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));

app.use('*', (req, res) => res.sendFile(path.resolve(__dirname, 'dist', 'index.html')));
app.listen(port, () => console.log('server at', port))