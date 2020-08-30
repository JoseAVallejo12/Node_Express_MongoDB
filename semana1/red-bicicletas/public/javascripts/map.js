var cartagena = L.map('mapid1').setView([10.426075, -75.549263], 13);

var santamarta = L.map('mapid2').setView([11.240059, -74.193915], 13);

var barranquilla = L.map('mapid3').setView([10.995249, -74.809941], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(cartagena);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(santamarta);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(barranquilla);

L.marker([10.434615, -75.540097]).addTo(cartagena)
    .bindPopup('Bike rental.<br> Easily.')
    /* .openPopup(); abre en automatico la etiqueta */
    .openPopup()

L.marker([11.247052, -74.213919]).addTo(santamarta)
    .bindPopup('Bike rental.<br> Easily')
    .openPopup()



L.marker([11.019387, -74.792684]).addTo(barranquilla)
    .bindPopup('Bike rental.<br> Easily')
    .openPopup()

    

