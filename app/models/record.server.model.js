var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
var recordSchema = new Schema({
    name: String,
    lat: Number,
    lng: Number,
    notes: [String]
});

mongoose.model('Record', recordSchema);