var express = require('express')
  , http = require('http')
  , path = require('path');
  
var cors = require('cors')

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.use(cors());

const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');

app.use(
  '/api-docs',
  swaggerUi.serve, 
  swaggerUi.setup(swaggerDocument)
);

const db = require("./models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
// app.use(express.json())
// app.set('views', __dirname + '/views');
// app.set('view engine', 'jade');
// // app.use(express.favicon());
// // app.use(express.logger('dev'));
// app.use(express.bodyParser());
// app.use(express.methodOverride());
// app.use(app.router);
// app.use(require('stylus').middleware(__dirname + '/public'));
// app.use(express.static(path.join(__dirname, 'public')));

// development only
// if ('development' == app.get('env')) {
//   app.use(express.errorHandler());
// }

// var EmpManager = require('./empManager').EmpManager;
// var empManagerService = new EmpManager(app);
require("./routes/emp.routes")(app);
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
