const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const trackingSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  status1: {
    type: String,
    enum: ['packed', 'notyet'],
    required: true
  },
  date1: {
    type: String,
    required: true
  },
  status2: {
    type: String,
    enum: ['dispatched', 'notyet'],
    required: true
  },
  date2: {
    type: String,
    required: true
  },
  status3: {
    type: String,
    enum: ['notyet', 'complete'],
    required: true
  },
  date3: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model(
    "tracking", //file name
    trackingSchema //function name
)



