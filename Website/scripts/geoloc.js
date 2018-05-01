

(() => {
  if (!window.navigator || !window.navigator.geolocation) {
    alert('Your browser doesn\'t support geolocation!');
    return;
  }

  function geolocate() {
    navigator.geolocation.getCurrentPosition(onGeolocateSuccess, onGeolocateError);
  }

  function onGeolocateSuccess(coordinates) {
    const { latitude, longitude } = coordinates.coords;
    showMap(latitude, longitude);
  }

  function onGeolocateError(error) {
    console.log(error.code, error.message);

    if (error.code === 1) {
      console.log('User declined geolocation');
    } else if (error.code === 2) {
      console.log('Geolocation position unavailable');
    } else if (error.code === 3) {
      console.log('Timeout determining geolocation');
    }
  }

  function onLocationChange(coordinates) {
    const { latitude, longitude } = coordinates.coords;
    console.log('Changed coordinates: ', latitude, longitude);
  }


  function showMap(lat, lng) {
    const $map = document.getElementById('map');
    const position = { lat, lng };
    window.map = new google.maps.Map($map, {
      center: position,
      zoom: 6
    });
    window.markers = window.markers || [];
    const marker = new google.maps.Marker({ map, position });
  }

  function hideMap() {
    const $map = document.getElementById('map');
    $map.innerHTML = '';
  }

  window.enableButtons = () => {
    const $geolocateButton = document.getElementById('geolocation-button');
    
    $geolocateButton.disabled = false;


    console.log('Google Maps API loaded');
  }

  document.addEventListener('DOMContentLoaded', () => {
    const $geolocateButton = document.getElementById('geolocation-button');
    
    $geolocateButton.addEventListener('click', geolocate);
    
  });
})();


