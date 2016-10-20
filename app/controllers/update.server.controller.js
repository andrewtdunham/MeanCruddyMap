exports.render = function(req, res) {
    res.render('update', {title: 'Update', operation: 'update',
    styles: ["https://unpkg.com/leaflet@1.0.1/dist/leaflet.css", "/css/map.css"],
    scripts: ["https://unpkg.com/leaflet@1.0.1/dist/leaflet.js", "/lib/angular/angular.js", "/js/map.js", "/record.js", "/js/map-create.js"]})
};