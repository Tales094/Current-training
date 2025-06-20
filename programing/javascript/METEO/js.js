let map = L.map('map', {
  maxBounds: [
    [-85, -180],
    [85, 180]
  ],
  maxBoundsViscosity: 1.0 
}).setView([-0.39,100 ], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    minZoom: 3,
    noWrap: true,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

console.log(map);


//api goweather meteo
// recuperer la longitude et l'atitude
// recuperer la ville quand on click sur la carte

    map.addEventListener('click', (e) => {
        let lat = e.latlng.lat.toFixed(6);
        let lon = e.latlng.lng.toFixed(6);clairevent
        console.log(`èlatitude = ${lat}`);
        console.log(`longitude = ${lon}`);
        fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const pays = document.createElement('p');
                const city = document.createElement('p');
                const infoPosition = document.querySelector('.info-position');
                pays.textContent = `Pays: ${data.address?.country || "Inconnu"}`;
                city.textContent = `Ville: ${data.address?.city || "Inconnu"}`;
                infoPosition.appendChild(pays);
                infoPosition.appendChild(city);
    const cityName = data.address.city || data.adress.town || data.adress.village || data.address.county;

               /*  const cityName = data.address.county; */
fetch(`https://goweather.xyz/weather/${cityName}`) 
.then(response => response.json())
.then(data => { 
const meteoInfo = document.createElement('p');
infoPosition.appendChild(meteoInfo);
meteoInfo.textContent = `Météo: ${data.temperature}, ${data.wind}`;
console.log(data);

});



})

            });