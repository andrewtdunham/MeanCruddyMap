exports.render = function(req, res) {
    var marked = require ('marked');
    var fs = require('fs');

   var readme = function () {
      var path = "/home/ubuntu/workspace/map/README.md";
      var include = fs.readFileSync (path, 'utf8');
      var html = marked (include);

      return html;
   };
    res.render('index', {title: 'Hello!', "readme": readme})
};