function geolocate() {
  navigator.geolocation.getCurrentPosition(Location);
}

function Location(coordinates) {
  const {
    latitude,
    longitude
  } = coordinates.coords;
  showMap(latitude, longitude);
}

function showMap(lat, lng) {
  const $map = document.getElementById('map');
  const position = {
    lat,
    lng
  };
  window.map = new google.maps.Map($map, {
    center: position,
    zoom: 6
  });
  window.markers = window.markers || [];
  const marker = new google.maps.Marker({
    map,
    position
  });
}


window.enableButtons = () => {
  const $locationButton = document.getElementById('geolocation-button');

  $locationButton.disabled = false;
}

document.addEventListener('DOMContentLoaded', () => {
  const $locationButton = document.getElementById('geolocation-button');

  $locationButton.addEventListener('click', geolocate);

});