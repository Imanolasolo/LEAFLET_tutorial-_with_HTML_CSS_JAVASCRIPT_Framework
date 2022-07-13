// PGIS Project IT4PROS

// Create map with coordinates and zoom
let map = L.map('map').setView([4.639386,-74.082412],10)

// Create Tilelayer from openstreetmap.org
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: 'IT4PROS 2022 &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


//-------------------------------------------------------