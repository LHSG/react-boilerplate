const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.devel.config.js');

const app = express();
const compiler = webpack(config);

// app.use(express.static(__dirname + '/build'));
// app.use(webpackMiddleware(compiler));
// app.use(webpackHotMiddleware(compiler)); // And this line

// Step 2: Attach the dev middleware to the compiler & the server
app.use(webpackMiddleware(compiler, {
  noInfo: true, publicPath: config.output.publicPath
}));

// Step 3: Attach the hot middleware to the compiler & the server
app.use(webpackHotMiddleware(compiler, {
  log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
}));

app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, '/../index.html'));
});

app.listen(3000);

if(module.hot) {
  // accept update of dependency
  module.hot.accept("../app/app.jsx", function() {
    // replace request handler of server
    server.removeListener("request", requestHandler);
    requestHandler = require("../app/app.jsx");
    server.on("request", requestHandler);
  });
}