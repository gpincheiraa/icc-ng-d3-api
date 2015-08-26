var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var surveyOptionSchema = new Schema({
  idOption:     { type: Number },
  topic:      { type: String }   
},{ versionKey: false });

module.exports = mongoose.model('SurveyOption', surveyOptionSchema);
