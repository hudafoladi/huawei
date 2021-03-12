var express = require('express');
var app = express();
var path = require('path');
var serve_static = require('serve-static');
var bodyParser = require('body-parser');
var errorHandler = require('./server.errorHandler')();

var args = Array.prototype.slice.call(process.argv, 2, 5);
var root = args[0] || 'app/';
var port = args[1] || 3000;
var useLiveReload = args[2] === 'true';

if (useLiveReload == true) {
    var connect_livereload = require('connect-livereload');
    app.use(connect_livereload());
}

root.split(',').forEach(function (r) {
    app.use(serve_static(path.join(process.cwd(), r)));
});

app.use(errorHandler.init);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//app.use('/node_modules/angular-recaptcha/src/', express.static(__dirname + '/node_modules/angular-recaptcha/src/'));

// Create HTTP error

function createError(status, message) {
  var err = new Error(message);
  err.status = status;
  return err;
}

app.param('user', function(req, res, next, id){
  //console.log('checking user request param' + req.params.user);
  
  //next();
  if (req) {
    next();
    res.sendFile(__dirname + '/' + root + '/index.html');
  } else {
    next(createError(404, 'failed to find user'));
  }
});

// app.param('deptCode', function(req, res, next, id){
//   console.log('checking deptCode request param' + req.params.deptCode);
  
//   //next();
//   if (req.params.deptCode) {
//     next();
//     //res.sendFile(__dirname + '/' + root + '/index.html');
//   } else {
//     next(createError(404, 'failed to find deptCode'));
//   }
// });

//setup routes
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/' + root + '/index.html');
});
app.get('/datatable', function(req, res) {
  res.sendFile(__dirname + '/' + root + '/index.html');
});

app.post('/testSaveFormData', function(req, res) {
  if(req.body.fistName == '' || req.body.lastName == '' || req.body.occupation == '' || req.body.gender == '' || req.body.isActive == '')
  {
    res.status(400).send('Missing Parameter Values');
    //res.send('Missing Parameter Values', 400);  
  }
  else
  {
    res.send('Mock Data Saved Successfully');
  }
});

// app.get('/person/:user', function(req, res) {
//   res.sendFile(__dirname + '/' + root + '/index.html');
// });
// app.get('/department', function(req, res) {
//   res.sendFile(__dirname + '/' + root + '/index.html');
// });
// app.get('/faq', function(req, res) {
//   res.sendFile(__dirname + '/' + root + '/index.html');
// });
// app.get('/pageNotFound', function(req, res) {
//   res.sendFile(__dirname + '/' + root + '/index.html');
// });
// app.get('/studentPreferences', function(req, res) {
//   res.sendFile(__dirname + '/' + root + '/index.html');
// });
// app.get('/studentPreferences/:user', function(req, res) {
//   console.log('checking student user with param ' + req.params.user);
//   res.sendFile(__dirname + '/' + root + '/index.html');
// });
// app.get('/myPreferences', function(req, res) {
//   res.sendFile(__dirname + '/' + root + '/index.html');
// });
// app.get('/adminPreferences', function(req, res) {
//   res.sendFile(__dirname + '/' + root + '/index.html');
// });
// app.get('/adminPreferences/:user', function(req, res) {
//   console.log('checking user with param ' + req.params.user);
//   res.sendFile(__dirname + '/' + root + '/index.html');
// });
// app.get('/departmentPreferences', function(req, res) {
//   res.sendFile(__dirname + '/' + root + '/index.html');
// });
// app.get('/departmentPreferences/:deptCode', function(req, res) {
//   res.sendFile(__dirname + '/' + root + '/index.html');
// });
app.listen(port, function () {

    var host = 'localhost';

    console.log('folder "%s" serving at http://%s:%s', root, host, port);
});
