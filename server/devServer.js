var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('../webpack.config.dev');
var databaseConfig = require('../config');

// database
var mongoose = require('mongoose');
var NoteModel = require('./db/mongo/models/note');

var app = express();
var compiler = webpack(config);

mongoose.connect(databaseConfig.database);
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red);
});

/**
 * GET /api/
 */
app.get('/api/notes', function(req, res, next) {
  NoteModel.find({}).exec(function(err, notes) {
    if (err) return next(err);
    return res.send(notes);
  });
});

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/public', express.static('public'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.use(function(req, res) {
  Router.run(routes, req.path, function(Handler) {
    var html = React.renderToString
  });
});

app.listen(7777, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:7777');
});
