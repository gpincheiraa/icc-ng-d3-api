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
  res.send("<h1>API REST ESCRITA EN NODE UTILIZANDO EXPRESS + MONGOOSE + MONGODB</h1>");
});

app.use(router);

// Import Models and controllers
var surveyOptionModel = require('./models/surveyOption')(app, mongoose),
    SurveyOptionsCtrl = require('./controllers/surveyOptions'),
// API routes
    surveyOptions = express.Router();

surveyOptions
  .route('/survey-options')
  .get(SurveyOptionsCtrl.findAllSurveyOptions)
  .post(SurveyOptionsCtrl.newSurveyOption);

app.use('/api', surveyOptions);


// Import Models and controllers
var voteModel = require('./models/vote')(app, mongoose),
    VoteCtrl = require('./controllers/votes'),
// API routes
    vote = express.Router();

vote
  .route('/votes')
  .get(VoteCtrl.findAllVotes)
  .post(VoteCtrl.newVote);

app.use('/api', vote);

//Conexión a base de datos MongoDB
mongoose.connect('mongodb://admin:admin@ds035533.mongolab.com:35533/heroku_gp8zdj88', function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  } else {
    console.log('Connected to Database');
  }
});

app.listen(port, function() {
  console.log("Node server running on http://localhost:" + port);
});