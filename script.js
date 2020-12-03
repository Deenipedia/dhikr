

// Get the geolocation 

if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition( async function(position){
        // get location of the user
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;    
        console.log(latitude, longitude)

        const url = 'http://api.aladhan.com/v1/timings?latitude='+latitude+'&longitude='+longitude
        const response = await fetch(url);
        const data = await response.json()
        console.log(data)
        const timings = data['data']['timings']
        const hijiDate = data['data']['date']['hijri']
        const gregorianDate = data['data']['date']['gregorian']

        // for(item in data['data']['timings']){
        //     console.log(item,timings[item])
        // }

        //date
        document.getElementById("Hijri").textContent = hijiDate['date'];
        document.getElementById("Gregorian").textContent = gregorianDate['date'];

        //namaz timings
        document.getElementById("Fajr").textContent = timings['Fajr'];
        document.getElementById("Dhuhr").textContent = timings['Dhuhr'];
        document.getElementById("Asr").textContent = timings['Asr'];
        document.getElementById("Maghrib").textContent = timings['Maghrib'];
        document.getElementById("Isha").textContent = timings['Isha'];
        // document.getElementById("Midnight").textContent = timings['Midnight'];
        document.getElementById("Imsak").textContent = timings['Imsak'];
        // document.getElementById("Sunrise").textContent = timings['Sunrise'];
        // document.getElementById("Sunset").textContent = timings['Sunset'];

        // Working with map and foursquare API
        const attribution = '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors';
        const mymap = L.map('mapid').setView([0, 0], 2);
        const tileUrl =  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        

        var iperson = L.icon({
            iconUrl: './images/current.png',
            iconSize: [50, 50]});
        
        
        var imosque = L.icon({
            iconUrl: './images/mosque.png',
            iconSize: [24, 24]});



        const mosques = await fetch('https://api.foursquare.com/v2/venues/explore?client_id=3GXWPOIZTI3JJGTZAOIGCPA42VU01SK44JPHOGL43ZVGMTFR&client_secret=L3G4DW2ZR321E2PZZEBVB514LMBFA2K3KAYXDIAL1QNOTISD&v=20180323&limit=10&ll='+latitude+','+longitude+'&query=mosque');
        const mjson = await mosques.json()
        // const mname = mjson['response']['groups']['0']['items']['1']['venue']['name']
        const mosqueItems = mjson['response']['groups']['0']['items']
        console.log(mosqueItems)

        for(item in mosqueItems){
            mlat = mosqueItems[item]['venue']['location']['lat']
            mlon = mosqueItems[item]['venue']['location']['lng']
            var marker = L.marker([mlat, mlon], {icon: imosque}).addTo(mymap);
            marker.bindPopup(mosqueItems[item]['venue']['name']).openPopup();
        }

        
        
        
        var marker = L.marker([latitude, longitude], {icon: iperson}).addTo(mymap);
        var circle = L.circle([latitude, longitude], {
            color: '#02bc77',
            fillColor: '#02bc77',
            fillOpacity: 0.5,
            radius: 500
        }).addTo(mymap);

        const tiles = L.tileLayer(tileUrl, { attribution });
        tiles.addTo(mymap);

        mymap.setView([latitude, longitude], 17);
        
    })
}

else {
    console.log('Geolocation is not supported by your browser');
    alert('Geolocation is not supported by your browser');
}

// show clock

var idVar = setInterval(() => { 
    timer()
 }, 1000);
 
 function timer() {
    var dateVar = new Date();
    var time = dateVar.toLocaleTimeString();
    document.getElementById("clock").innerHTML = time;
 };
 

 // Random Dhikr script passing
 
async function Generate() {
    const dhikr_res = await fetch('https://raw.githubusercontent.com/Deenipedia/dhikr/master/data.json');
    const dhikr = await dhikr_res.json()
    console.log(dhikr)

    var min = 0,
        max = 119,
        mix = Math.random(),
        rnd = Math.random() * (max - min) + min,
        NumberResult = Math.floor(rnd * (1 - mix) + 119 * mix);

    var arabic = document.getElementById('arabic');
    var bangla = document.getElementById('bangla');
    var meaning = document.getElementById('meaning');

    arabic.innerText = dhikr[NumberResult].ARABIC
    bangla.innerText = dhikr[NumberResult].BANGLA_UCCHARON
    meaning.innerText = dhikr[NumberResult].BANGLA_ORTHO
};

Generate();

