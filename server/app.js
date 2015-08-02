var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    cors = require('cors');

var docker_api = require('./routes/docker_api.js');

var app = express();

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, '../client/src/assets/img/favicon.png')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());


//app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));
//app.use('/', routes);
app.use('/docker-api', docker_api);

/*app.all('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});*/

console.log('Running with env '+app.get('env'));

/**
 * Development Settings
 */
if (app.get('env') === 'development') {
    // This will change in production since we'll be using the dist folder
    //app.use(express.static(path.join(__dirname, '../client')));
    // This covers serving up the index page
    app.use(express.static(path.join(__dirname, '../.tmp')));
    app.use(express.static(path.join(__dirname, '../client/src')));
    app.all('*', function (req, res) {
      res.sendFile(path.join(__dirname, '../.tmp/index.html'));
    });

    // Error Handling
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

/**
 * Production Settings
 */
if (app.get('env') === 'production') {
    // changes it to use the optimized version for production
    app.use(express.static(path.join(__dirname, '/dist')));

    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
}

module.exports = app;
