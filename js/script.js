// specific JS for GPX files //
document.addEventListener('DOMContentLoaded', function() {
    console.log("Script loaded and DOMContentLoaded event triggered.");
  
    // Map for Offersøykammen
    console.log("Creating Offersøykammen map...");
    var mapOffersoykammen = L.map('map-offersøykammen').setView([68.203912, 13.914885], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mapOffersoykammen);
  
    // Load GPX file in Offersøykammen map
    console.log("Loading GPX file for Offersøykammen...");
    new L.GPX("https://raw.githubusercontent.com/thijsraaijmakers/Inclusive-Webdesign/main/media/gpx/Offers%C3%B8ykammen.gpx", {
        async: true,
        marker_options: {
            startIconUrl: 'https://cdn.jsdelivr.net/npm/leaflet-gpx@1.7.0/pin-icon-start.png',
            endIconUrl: 'https://cdn.jsdelivr.net/npm/leaflet-gpx@1.7.0/pin-icon-end.png',
            shadowUrl: 'https://cdn.jsdelivr.net/npm/leaflet-gpx@1.7.0/pin-shadow.png'
        }
    }).on('loaded', function(e) {
        console.log("Offersøykammen GPX loaded.");
        mapOffersoykammen.fitBounds(e.target.getBounds());
    }).addTo(mapOffersoykammen);
  
    // Map for Djevelporten
    console.log("Creating Djevelporten map...");
    var mapDjevelporten = L.map('map-djevelporten').setView([68.231361, 14.563533], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mapDjevelporten);
  
    // Load GPX file in Djevelporten map
    console.log("Loading GPX file for Djevelporten...");
    new L.GPX("https://raw.githubusercontent.com/thijsraaijmakers/Inclusive-Webdesign/main/media/gpx/Djevelporten_Fløya.gpx", {
        async: true,
        marker_options: {
            startIconUrl: 'https://cdn.jsdelivr.net/npm/leaflet-gpx@1.7.0/pin-icon-start.png',
            endIconUrl: 'https://cdn.jsdelivr.net/npm/leaflet-gpx@1.7.0/pin-icon-end.png',
            shadowUrl: 'https://cdn.jsdelivr.net/npm/leaflet-gpx@1.7.0/pin-shadow.png'
        }
    }).on('loaded', function(e) {
        console.log("Djevelporten GPX loaded.");
        mapDjevelporten.fitBounds(e.target.getBounds());
    }).addTo(mapDjevelporten);
  
    // Map for Ryten
    console.log("Creating Ryten map...");
    var mapRyten = L.map('map-ryten').setView([68.0995, 13.5215], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mapRyten);
  
    // Load GPX file in Ryten
    console.log("Loading GPX file for Ryten...");
    new L.GPX("https://raw.githubusercontent.com/thijsraaijmakers/Inclusive-Webdesign/main/media/gpx/Ryten.gpx", {
        async: true,
        marker_options: {
            startIconUrl: 'https://cdn.jsdelivr.net/npm/leaflet-gpx@1.7.0/pin-icon-start.png',
            endIconUrl: 'https://cdn.jsdelivr.net/npm/leaflet-gpx@1.7.0/pin-icon-end.png',
            shadowUrl: 'https://cdn.jsdelivr.net/npm/leaflet-gpx@1.7.0/pin-shadow.png'
        }
    }).on('loaded', function(e) {
        console.log("Ryten GPX loaded.");
        mapRyten.fitBounds(e.target.getBounds());
    }).addTo(mapRyten);
  });
  