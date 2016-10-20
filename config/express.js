var express    = require('express');
var morgan     = require('morgan');
var bodyParser = require('body-parser');

module.exports = function() {
    var app = express();
    
    //Middleware
    app.use(morgan('dev')); 
    app.use(bodyParser.urlencoded({ extended: true })); 
    app.use(bodyParser.json());
    
    app.set('views', './app/views');
    app.set('view engine', 'ejs');
    
    require("../app/routes/index.server.routes.js")(app);
    require("../app/routes/create.server.routes.js")(app);
    require("../app/routes/read.server.routes.js")(app);
    require("../app/routes/update.server.routes.js")(app);
    require("../app/routes/delete.server.routes.js")(app);
    require("../app/routes/record.server.routes.js")(app);
    
    app.use(express.static('./public'));
    
    return app;
};