// Node Server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var index = require('./routes/index');
var routes = require('./routes/routes');

app.set('port', 5000);

app.use(bodyParser.urlencoded({extended: true}));

//Routes
app.use('/felines', routes);

app.use('/', index);

app.listen(app.get('port'), function() {
  console.log('Server is ready on port:' + app.get('port'));
});
