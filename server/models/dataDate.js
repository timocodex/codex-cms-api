// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var dataDateSchema = new Schema({
  date: { type: String,required: true },
  frequency: { type: String, required: true }
});

// the schema is useless so far
// we need to create a model using it
var DataDate = mongoose.model('DataDate', dataDateSchema);

// make this available to our users in our Node applications
module.exports = DataDate;
