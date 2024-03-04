// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set port
var port = process.env.PORT || 8080;

// Create instance of express router
var router = express.Router();

// Middleware
router.use(function(req, res, next) {
  console.log('Something is happening');
  next();
});

// Test route
router.get('/', function(req, res) {
  res.json({ message: 'Welcome to our api!' });
});

// Register routes
app.use('/api', router);

// Start server
app.listen(port);
console.log('Server started on port ' + port);

// Path: comments.js
// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set port
var port = process.env.PORT || 8080;

// Create instance of express router
var router = express.Router();

// Middleware
router.use(function(req, res, next) {
  console.log('Something is happening');
  next();
});

// Test route
router.get('/', function(req, res) {
  res.json({ message: 'Welcome to our api!' });
});

// Register routes
app.use('/api', router);

// Start server
app.listen(port);
console.log('Server started on port ' + port);

// Path: comments.js
// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set port
var port = process.env.PORT || 8080;

// Create instance of express router
var router = express.Router();

// Middleware
router.use(function(req, res, next) {
  console.log('Something is happening');
  next();
});

// Test route
router.get('/', function(req, res) {
  res.json({ message: 'Welcome to our api!' });
});

// Register routes
app.use('/api', router);

// Start server
app.listen(port);
console.log('Server started on port ' + port);

// Path: comments.js
// Create web server
var express = require('express');
var app = express();
var
