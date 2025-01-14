document.addEventListener("DOMContentLoaded", function () {
    var map = L.map('map').setView([latitude, longitude], zoomLevel);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    L.marker([latitude, longitude]).addTo(map)
      .bindPopup('Property Location')
      .openPopup();
  });