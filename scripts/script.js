var showMilitaryTime = false;


function showHours(theHour)
{
	if (showMilitaryTime || (theHour > 0 && theHour < 13))
		return (theHour);
	else if (theHour == 0)
		return 12;
	else return (theHour - 12)
}

function fillZeros(inValue)
{
	if (inValue > 9)
		return ":" + inValue;
	else return ":0" + inValue;
}

function showAmPm()
{
	if (showMilitaryTime)
		return ("");
	if (now.getHours() < 12)
		return (" AM");
	else return (" PM");
}

function showTime(elm)
{
	now = new Date;
	
	var theTime = 
		showHours(now.getHours()) + 
		fillZeros(now.getMinutes()) + 
		fillZeros(now.getSeconds()) + 
		showAmPm();
  document.getElementById(elm).innerHTML = theTime;
	setTimeout("showTime('"+elm+"')", 1000);
}

showTime('clock');



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
    

    $.getJSON('https://raw.githubusercontent.com/niyazed/dhikr/master/data.json', function(data) {
      arabic.innerText = data[NumberResult].ARABIC
      bangla.innerText = data[NumberResult].BANGLA_UCCHARON
      meaning.innerText = data[NumberResult].BANGLA_ORTHO
    });

};

Generate();
