module.exports = function(app) {
    var index = require('../controllers/create.server.controller');
    app.get('/create', index.render);
};