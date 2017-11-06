var mapFactories = angular.module('maply.factories');

mapFactories.factory('mapFactory', [ '$rootScope', mapFactory]);

function mapFactory($rootScope){
	return {
		create : function(id,selectedMap){
			if(!$rootScope.mymap){
				$rootScope.mymap = L.map(id,{ zoomControl:false });
				L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
					minZoom: selectedMap.nativeZoom.min,
					maxZoom: selectedMap.nativeZoom.max,
					tms: selectedMap.nativeZoom.tms
				}).addTo($rootScope.mymap)
				$rootScope.mymap.fitBounds(selectedMap.bounds);	
				return $rootScope.mymap;
			} else {
				$rootScope.mymap.fitBounds(selectedMap.bounds);
			}
			
		},
		tile : function(selectedMap){
			return L
		},
		addAnnotation : function(selectedMap, type){
			var coordinates = [];
			for(i in selectedMap.annotations){
				if(selectedMap.annotations[i].type == type){
					coordinates = selectedMap.annotations[i].coordinates;
				}
			}	

			switch(type) {
				case 'marker':
				return new L.marker(coordinates[0]).addTo($rootScope.mymap);
				break;
				case 'polyline':
				return new L.polyline(coordinates).addTo($rootScope.mymap);
				break;
				case 'polygon':
				return new L.polygon(coordinates).addTo($rootScope.mymap);
				break;
				default:
				return false;
			}
		},
		remove : function(){
			$rootScope.mymap.off().remove();
		}
	}
}
