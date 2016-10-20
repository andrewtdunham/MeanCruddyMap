var record = require("../../app/controllers/record.server.controller.js");

module.exports = function(app){
    app.route("/record")
        .post(record.create)
        .get(record.read)
        .put(record.update)
        .delete(record.delete);
};