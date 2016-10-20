var Record = require('mongoose').model('Record');

exports.create = function(req, res, next) {
    var record = new Record(req.body);
    record.save(function(err) {
        if (err){
            console.log(err);
            return next(err);
        } else {
            res.json(record);
        }
    });
};

exports.read = function(req, res, next){
    Record.find({}, function(err, records){
        //console.log(req);
        if (err){
            return next(err);
        }
        res.json(records);
    });
};

exports.update = function(req, res, next){
    console.log("UPDATE");
    console.log(req.body);
    var id = req.body._id;
    delete req.body._id;
    Record.findByIdAndUpdate(id, req.body, function(err, record){
        if (err){
            console.log(err);
        }
        res.json(record);
    });
};

exports.delete = function(req, res, next){
    var id = req.query._id;
    Record.findByIdAndRemove(id, function(err, record){
        if (err){
            //console.log(err);
        }
        res.json(record);
    });
};