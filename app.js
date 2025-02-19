var http = require('http'),
    path = require('path'),
    methods = require('methods'),
    express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    cors = require('cors'),
    passport = require('passport'),
    errorhandler = require('errorhandler'),
    mongoose = require('mongoose');

var isProduction = process.env.NODE_ENV === 'production';

// Create global app object
var app = express();

app.use(cors());

// Normal express config defaults
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('method-override')());
app.use(express.static(__dirname + '/public'));

app.use(
  session({ secret: 'secret', cookie: { maxAge: 60000 }, 
  resave: false, saveUninitialized: false  }));

if (!isProduction) {
  app.use(errorhandler());
}


  //mongoose.connect('mongodb+srv://acnesiac:Aruizrivas1@cluster0.oytmo.mongodb.net/srpagotest?authSource=admin&replicaSet=atlas-weuu5b-shard-0&readPreference=primary&appname=MongoDB%20Compass');
  mongoose.connect('mongodb+srv://acnesiac:Aruizrivas1@cluster0.oytmo.mongodb.net/srpagotest?retryWrites=true&w=majority&appName=Cluster0' );
  mongoose.set('debug', true);


require('./models/User');
require('./models/Movie');
require('./config/passport');

app.use(require('./routes'));

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (!isProduction) {
  app.use(function(err, req, res, next) {
    console.log(err.stack);

    res.status(err.status || 500);

    res.json({'errors': {
      message: err.message,
      error: err
    }});
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({'errors': {
    message: err.message,
    error: {}
  }});
});

// finally, let's start our server...
var server = app.listen( process.env.PORT || 3000, function(){
  console.log('Listening on port ' + server.address().port);
});
