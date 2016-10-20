/*global map, angular, L*/

angular.module('mapApp', [])
.controller('formController', ['$scope', '$http', function($scope, $http) {
  
  $scope.$watch('record.lat', function(newValue, oldValue){
    console.log(oldValue);
    if ($scope.activeMarker){
      map.removeLayer($scope.activeMarker)
    }
    console.log($scope.record);
    $scope.activeMarker = L.marker({lat: $scope.record.lat, lng: $scope.record.lng});
    $scope.activeMarker.addTo(map);
    map.panTo($scope.activeMarker.getLatLng());
  });
  
  $scope.$watch('allRecords', function(newValue, oldValue){
    console.log($scope.allRecords);
    //remove old markers
    $scope.clearPoints();
    //add new markers
    for(var i=0; i < $scope.allRecords.length; i++){
      var record = $scope.allRecords[i];
      console.log(record);
      if (typeof(record.lat) != 'undefined' && typeof(record.lat) != 'undefined'){
        var latlng = {lat: record.lat, lng: record.lng};
        var icon = L.icon({
            iconUrl: '/img/poke-icon.png',
            iconSize: [32, 32]
        });
        var marker = L.marker(latlng,{icon: icon});
        marker._id = record._id;
        marker.on('click', function(e){
          console.log(this);
          $scope.selected = this._id;
          console.log($scope.selected);
          $scope.$digest();
          $scope.updateRecord();
          $scope.$digest();
        })
        marker.addTo(map);
        $scope.allMarkers.push(marker);
      }
      
    }
  });

  $scope.addNote = function() {
    $scope.record.notes.push($scope.activeNote);
    $scope.activeNote = "";
  };

  $scope.reset = function() {
    if ($scope.marker){
      map.removeLayer($scope.marker);
    }
    $scope.clearPoints()
    $scope.init();
  };
  
  $scope.create = function() {
    $http.post("/record", $scope.record)
    .then(function(response){
      alert("Successfully updated/n" + JSON.stringify(response))
      $scope.clearPoints()
      $scope.reset();
    });
    
  };
  
  $scope.update = function () {
    $http.put("/record", $scope.record)
    .then(function(response){
      alert("Successfully updated/n" + JSON.stringify(response))
      $scope.clearPoints()
      $scope.reset();
      $scope.$digest();
    })
  };
  
  $scope.delete = function() {
    $http.delete("/record?_id=" + $scope.record._id)
    .then(function(response){
      alert("Successfully deleted/n" + JSON.stringify(response));
      $scope.clearPoints()
      $scope.reset();
    });
    
  };
  
  $scope.updateRecord = function(e){
    for (var i=0; i < $scope.allRecords.length; i++){
      if ($scope.allRecords[i]._id === $scope.selected){
        $scope.record = $scope.allRecords[i];
        break;
      }
    }
  };
  
  $scope.read = function(){
    alert("This button doesn't do anything")
  };
  
  $scope.addPoint = function(latlng){
    $scope.record.lat = latlng.lat;
    $scope.record.lng = latlng.lng;
    console.log($scope.record);
    $scope.$digest();
  };
  
  $scope.clearPoints = function() {
    for (var i=0; i < $scope.allMarkers.length; i++){
      $scope.allMarkers[i]
      map.removeLayer($scope.allMarkers[i]);
    }
    $scope.allMarkers = [];
  },
  
  $scope.init = function(){
    $scope.record = {notes:[]};
    $scope.allRecords = [];
    $scope.activeNote = "";
    $scope.activeMarker;
    $scope.allMarkers = [];
    $http.get("/record")
    .then(function(response) {
        $scope.allRecords = response.data;
    });
    console.log($scope.allRecords);
  };
  
  $scope.init();

}]);