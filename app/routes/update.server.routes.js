module.exports = function(app) {
    var index = require('../controllers/update.server.controller');
    app.get('/update', index.render);
}