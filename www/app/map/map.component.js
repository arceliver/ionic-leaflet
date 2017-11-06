var app = angular.module('maply');

app.component('map', {
	templateUrl: 'app/map/map.html',
	controller: MapAppController,
	controllerAs: 'ctrl',
	bindings: {
		maps: '=',
		selectedMap: '='
	}
});

function MapAppController($scope, $rootScope, mapFactory){

	var _this = $scope.ctrl;
	var selectedMap = _this.selectedMap;
	
	mapFactory.create('map',selectedMap);
	mapFactory.addAnnotation(selectedMap, 'marker');
	mapFactory.addAnnotation(selectedMap, 'polyline');
	mapFactory.addAnnotation(selectedMap, 'polygon');
	$rootScope.mymap.flyToBounds(selectedMap.bounds);

}
