/*global map angular*/

window.onload = function() {
    var scope = angular.element(document.getElementById("lat")).scope();
    
    map.on('click', function(e){
    	scope.addPoint(e.latlng);
    });
};
