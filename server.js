var express  = require('express');
var morgan = require('morgan');
var cors = require('cors');

const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get our API routes
const api = require('./dsapi/routes/api');
const sasdb = require('./dsapi/lib/sasdb');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//initDBConnection();
sasdb.createDBCon();

// set rootPath
app.use(function(req, res, next) {
  req.rootPath = __dirname;
  next();
});

// Set our api routes
app.use('/api', api);

app.use(express.static('www'));
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
