var app = angular.module('maply.controllers');

app.controller("MaplyCtrl", 
	['$scope', 
	'$state', 
	'$stateParams',
	'$ionicLoading', 
	'$rootScope',
	'$ionicHistory',
	'$http',
	'mapFactory',  
	MaplyCtrl]);

function MaplyCtrl(
	$scope, 
	$state, 
	$stateParams, 
	$ionicLoading, 
	$rootScope,
	$ionicHistory,
	$http,
	mapFactory){

	$http.get('data/maps.json').success(function(data) {
   		$scope.maps = data;

   		var mapId = $stateParams.mapId;
   		if(!mapId)
   			$scope.form = {selectedMap : $scope.maps[0]};
   		else {
   			for(i in $scope.maps){
   				if($scope.maps[i].id == mapId){
   					$scope.form = {selectedMap : $scope.maps[i]};		
   				}
   			}
   		}
	});

	$scope.changeMapView = function(){
		mapFactory.addAnnotation($scope.form.selectedMap, 'marker');
		mapFactory.addAnnotation($scope.form.selectedMap, 'polyline');
		mapFactory.addAnnotation($scope.form.selectedMap, 'polygon');
		$rootScope.mymap.flyToBounds($scope.form.selectedMap.bounds);
	}

}