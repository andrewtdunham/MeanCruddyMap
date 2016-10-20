module.exports = function(app) {
    var index = require('../controllers/delete.server.controller');
    app.get('/delete', index.render);
}