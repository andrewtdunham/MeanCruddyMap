module.exports = function(app) {
    var index = require('../controllers/read.server.controller');
    app.get('/read', index.render);
}