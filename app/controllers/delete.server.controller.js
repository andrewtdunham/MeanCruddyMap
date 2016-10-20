exports.render = function(req, res) {
    res.render('delete', {title: 'Delete', operation: 'delete',
    styles: ["https://unpkg.com/leaflet@1.0.1/dist/leaflet.css", "/css/map.css"],
    scripts: ["https://unpkg.com/leaflet@1.0.1/dist/leaflet.js", "/lib/angular/angular.js", "/js/map.js", "/record.js"]})
};