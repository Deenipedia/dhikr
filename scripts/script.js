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

function Generate() {
    var min = 0,
        max = 119,
        mix = Math.random(),
        rnd = Math.random() * (max - min) + min,
		NumberResult = Math.floor(rnd * (1 - mix) + 119 * mix);

    var arabic = document.getElementById('arabic');
    var bangla = document.getElementById('bangla');
    var meaning = document.getElementById('meaning');
    

    $.getJSON('https://raw.githubusercontent.com/Deenipedia/dhikr/master/data.json', function(data) {
      arabic.innerText = data[NumberResult].ARABIC
      bangla.innerText = data[NumberResult].BANGLA_UCCHARON
      meaning.innerText = data[NumberResult].BANGLA_ORTHO
    });

};

Generate();
