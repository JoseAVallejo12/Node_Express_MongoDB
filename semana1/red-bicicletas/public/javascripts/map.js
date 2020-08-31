var barranquilla = L.map('mapid3').setView([11.019387, -74.792684], 13);
var santamarta = L.map('mapid2').setView([11.243087, -74.215301], 13);
var cartagena = L.map('mapid1').setView([10.422668, -75.539521], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYnJ1bm9mcmFuY2lvbmkiLCJhIjoiY2tlZzJzN2k3MGhhbzJycnNkaWhqb3U2eCJ9.IBbLv-Uvs6YI3-reYkb2-Q'
}).addTo(barranquilla);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYnJ1bm9mcmFuY2lvbmkiLCJhIjoiY2tlZzJzN2k3MGhhbzJycnNkaWhqb3U2eCJ9.IBbLv-Uvs6YI3-reYkb2-Q'
}).addTo(santamarta);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYnJ1bm9mcmFuY2lvbmkiLCJhIjoiY2tlZzJzN2k3MGhhbzJycnNkaWhqb3U2eCJ9.IBbLv-Uvs6YI3-reYkb2-Q'
}).addTo(cartagena);

/* Method for get from url */
fetch('/api/bicicletas')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        console.log(data.bicicletas)
        data.bicicletas.forEach(function(bici) {
            console.log(bici);
            if (bici.ciudad == "barranquilla") {
                L.marker(bici.ubicacion).addTo(barranquilla);
            }
            if (bici.ciudad == "santamarta") {
                L.marker(bici.ubicacion).addTo(santamarta);
            }
            if (bici.ciudad == "cartagena") {
                L.marker(bici.ubicacion).addTo(cartagena);
            }
        });
    })
