(function () {
  var mapContainer = document.getElementById("map");

  function initialize() {
    var myLatLng = new google.maps.LatLng(59.938594, 30.322719);

    var mapOptions = {
      center: myLatLng,
      scrollwheel: false,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      sensor: false,
      //disableDefaultUI: true
    };

    var map = new google.maps.Map(mapContainer, mapOptions);

    var iconMarker = {
      url: "../img/icon-map-pin.svg",
      scaledSize: new google.maps.Size(66, 66),
      origin: new google.maps.Point(0, 0),
      //anchor: new google.maps.Point(18, 18)
    };

    var markerOptions = {
      map: map,
      position: myLatLng,
      title: "S.Petersbourg",
      icon: iconMarker,
      optimized: false
    };

    var marker = new google.maps.Marker(markerOptions);
  }

  if (mapContainer) {
    google.maps.event.addDomListener(window, 'load', initialize);
  }
}());
