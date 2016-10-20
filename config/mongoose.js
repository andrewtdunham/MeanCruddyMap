var mongoose = require('mongoose');

module.exports = function() {
    var db = mongoose.connect("mongodb://localhost/mean-book");
    
    require("../app/models/record.server.model.js");
    
    return db;
}