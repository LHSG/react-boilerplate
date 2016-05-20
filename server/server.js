const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.devel.config.js');

const app = express();
const compiler = webpack(config);

app.use(express.static(__dirname + '/build'));
app.use(webpackMiddleware(compiler));
app.use(webpackHotMiddleware(compiler)); // And this line  

app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(3000); 