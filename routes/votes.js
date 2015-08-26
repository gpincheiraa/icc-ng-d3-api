module.exports = function(app) {

  var Votes = require('../models/vote.js');

  //POST - Insert a new vote for a survey Option
  newVote = function(req, res) {
    console.log('POST');
    console.log(req.body);

    var vote = new Vote({
      idOption:  req.body.idOption,
      comment:   req.body.comment  
    });

    vote.save(function(err) {
      if(!err) {
        console.log('Created');
      } else {
        console.log('ERROR: ' + err);
      }
    });

    res.send(tvshow);
  };

  findAllVotes = function(req, res) {
    Votes.find(function(err, options) {
        if(!err) {
            res.send(options);
        } else {
            console.log('ERROR: ' + err);
        }
    });
  };

  app.get('/votes', findAllVotes);
  app.post('/vote', newVote);
}


