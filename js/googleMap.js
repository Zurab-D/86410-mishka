(function () {
  var mapHtmlElement = document.getElementById("map");

  function initialize() {
    var myLatLng = new google.maps.LatLng(59.9362665,30.3215374);

    var map = new google.maps.Map(mapHtmlElement, {
      center: myLatLng,
      scrollwheel: false,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
    });

    var iconMarker = "img/map-marker.svg";

    var marker = new google.maps.Marker({
      position: myLatLng,
      title: "Sedona",
      //icon: iconMarker
    });

    marker.setMap(map);
  }

  if (mapHtmlElement) {
    google.maps.event.addDomListener(window, 'load', initialize);
  }
}());
