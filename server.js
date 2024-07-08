const API_URL = 'https://api.kcg.gov.tw/api/service/Get/b4dd9c40-9027-4125-8666-06bef1756092';

async function getData() {
    const response = await fetch(API_URL)
        .then(response => response.json())
        .then(response => response.data.retVal);

    return response;
}

const responseData = await getData();
const relevantData = responseData.filter(station => (station.sna == 'YouBike2.0_財政部高雄國稅局' || station.sna == 'YouBike2.0_高雄師範大學(活動中心)'));

console.log(relevantData)

// set up leaflet map
var map = L.map('map').setView([22.61626, 120.31333], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// pan map to user's location
map.locate({setView: true, maxZoom: 16});

// query kaohsiung government api

// loop over times in list, check for 3 closest ubike stations

// add markers for each ubike locations

// add popups to each marker with no. of ubikes