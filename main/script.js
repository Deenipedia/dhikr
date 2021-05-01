// Convert Time Format to 12 hours
async function convertFormat(time){
    var res = time.split(":")
    var hours = res[0]
    var minutes = res[1]
    var AmOrPm = hours >= 12 ? 'PM' : 'AM';
    hours = (hours % 12) || 12;
    var finalTime = hours + ":" + minutes + " " + AmOrPm;
    return finalTime
}

function getCurrentDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    return today;
}


function getKey(latitude, longitude) {
    return 'date=' + getCurrentDate() + '&latitude=' + latitude + '&longitude=' + longitude;
}


async function search() {
    var q = document.getElementById("gsearch").value;
    location.replace("https://www.google.com/search?q=" + q + "");
}

function processData(data) {
    const timings = data['data']['timings']
    const hijiDate = data['data']['date']['hijri']
    const gregorianDate = data['data']['date']['gregorian']

    //namaz timings
    const wakts = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha', 'Sunrise']
    wakts
        .filter(wakt => wakt in timings)
        .forEach(item => convertFormat(timings[item])
            .then((response) =>
                document.getElementById(String(item)).textContent = response
            ));

    //date
    document.getElementById("Hijri").textContent = hijiDate['date'];
    document.getElementById("Gregorian").textContent = gregorianDate['date'];

    //namaz timings
    // document.getElementById("Fajr").textContent = convertFormat(timings['Fajr']);
    // document.getElementById("Dhuhr").textContent = convertFormat(timings['Dhuhr']);
    // document.getElementById("Asr").textContent = convertFormat(timings['Asr']);
    // document.getElementById("Maghrib").textContent = convertFormat(timings['Maghrib']);
    // document.getElementById("Isha").textContent = convertFormat(timings['Isha']);
    // // document.getElementById("Midnight").textContent = convertFormat(timings['Midnight']);
    // // document.getElementById("Imsak").textContent = convertFormat(timings['Imsak']);
    // document.getElementById("Sunrise").textContent = convertFormat(timings['Sunrise']);
    // // document.getElementById("Sunset").textContent = convertFormat(timings['Sunset']);
}

// Eventually We would want to have the key
// as a combination of date and coords as the
// user might be travelling
const key = getCurrentDate();

let clockDisplayDelay = 1000;

function showClock() {
    document.getElementById("clock").innerHTML = new Date().toLocaleTimeString();
}

chrome.storage.local.get([key], cachedData => {
    if (cachedData[key]) {
        processData(cachedData[key]);
        showClock();
    } else if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition( async function(position){
            // get location of the user
            const latitude  = position.coords.latitude;
            const longitude = position.coords.longitude;

            fetch('http://api.aladhan.com/v1/timings?method=1&school=1&latitude='+latitude+'&longitude='+longitude)
                .then(response => chrome.storage.local.clear() || response.json())
                .then(data => chrome.storage.local.set({ [key]: data }, () => processData(data)))
                .finally(showClock);
        })
    } else {
        console.log('Geolocation is not supported by your browser');
        alert('Geolocation is not supported by your browser');
        showClock();
    }
});


 // Random Dhikr script passing

async function Generate() {
    const dhikr_res = await fetch('https://raw.githubusercontent.com/Deenipedia/dhikr/master/data.json');
    const dhikr = await dhikr_res.json()
    // console.log(dhikr)

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

