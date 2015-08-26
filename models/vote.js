var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var voteSchema = new Schema({
  idOption:     { type: Number },
  comment:      { type: String }   
},{ versionKey: false });

module.exports = mongoose.model('Vote', voteSchema);
