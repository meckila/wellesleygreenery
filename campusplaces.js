/*
Meckila Britt
CS 220 Human Computer Interaction
Campus Places
Javascript & JQuery
*/

//MAP
var wellesley = new google.maps.LatLng(42.291303, -71.306700);
var lake = new google.maps.LatLng(42.291487, -71.308031);
var greenhouses = new google.maps.LatLng(42.293672, -71.301801);
var topiary = new google.maps.LatLng(42.286619, -71.306196);

var MY_MAPTYPE_ID = 'custom_style';

function map() {
  //Customize features of map
  var featureOpts = [
    {
        "stylers": [
            {
                "hue": "#16a085"
            },
            {
                "saturation": 0
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
]

  var mapOptions = {
    zoom: 15,
    center: wellesley,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var styledMapOptions = {
    name: 'Custom Style'
  };

  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
  //Create marker for Lake, Greenhouses, Topiary
  var image = 'images/markerLake.png';
  var marker = new google.maps.Marker({
        position: lake,
        map: map, icon: image});
  var image2 = 'images/markerGreenhouses.png';
  var marker2 = new google.maps.Marker({
        position: greenhouses,
        map: map, icon: image2});
  var image3 = 'images/markerTopiary.png';
  var marker3 = new google.maps.Marker({
        position: topiary,
        map: map, icon: image3});
    
  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);     
}
google.maps.event.addDomListener(window, 'load', map); 
