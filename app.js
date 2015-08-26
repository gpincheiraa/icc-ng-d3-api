var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose'),
    port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res) {
   res.send("Hello World!");
});

app.use(router);

// Import Models and controllers
var surveyOptionModel = require('./models/surveyOption')(app, mongoose);
var voteModel = require('./models/vote')(app, mongoose);

var SurveyOptionsCtrl = require('./routes/surveyOptions');

// API routes
var surveyOptions = express.Router();

surveyOptions.route('/survey-options')
  .get(SurveyOptionsCtrl.findAllSurveyOptions)
  .post(SurveyOptionsCtrl.newSurveyOption);

app.use('/api', surveyOptions);


//Conexión a base de datos MongoDB
mongoose.connect('mongodb://gpincheiraa:chalo1986@ds035533.mongolab.com:35533/heroku_gp8zdj88', function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  } else {
    console.log('Connected to Database');
  }
});


app.listen(port, function() {
  console.log("Node server running on http://localhost:3000");
});