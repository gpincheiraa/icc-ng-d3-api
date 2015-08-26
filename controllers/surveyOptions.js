  var mongoose = require('mongoose');
  var SurveyOption  = mongoose.model('SurveyOption');

  //GET - Return all survey's options in the DB
  exports.findAllSurveyOptions = function(req, res) {
      SurveyOption.find(function(err, options) {
          if(!err) {
              res.send(options);
          } else {
              console.log('ERROR: ' + err);
          }
      });
  };

  exports.newSurveyOption = function(req, res) {
    console.log('POST');
    console.log(req.body);

    var surveyOption = new SurveyOption({
      idOption:  req.body.idOption,
      topic:     req.body.topic  
    });

    surveyOption.save(function(err) {
      if(!err) {
        console.log('Created : ' + JSON.stringify(surveyOption));
      } else {
        console.log('ERROR: ' + err);
      }
    });

    res.send(surveyOption);
  };
  
