var mongoose = require('mongoose'),
    Vote  = mongoose.model('Vote');

//POST - Insert a new vote for a survey Option
exports.newVote = function(req, res) {
  
  console.log('POST');
  console.log(req.body);

  var vote = new Vote({
    idOption:  req.body.idOption,
    comment:   req.body.comment,
    name   :   req.body.name 
  });

  vote.save(function(err) {
    if(!err) {
      console.log('Created');
    } else {
      console.log('ERROR: ' + err);
    }
  });

  res.send(vote);
};

exports.findAllVotes = function(req, res) {

  // Vote.find(function(err, options) {
  //   if(!err) {
  //     res.send(options);
  //   } else {
  //     console.log('ERROR: ' + err);
  //   }
  // });
  var queryOptions = {
    "key": {
      "idOption": true
    },
    "initial": {
      "count": 0
    },
    "reduce": function(curr, prev) {
      if (curr.idOption != null) 
        prev.count++
    }
  };
  
  Vote.group(queryOptions,function(err, options) {
    if(!err) {
      res.send(options);
    } else {
      console.log('ERROR: ' + err);
    }
  });

};




