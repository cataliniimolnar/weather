// api: 254749c717e6c54da854b850f7bbaf51

var api = 'https://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&appid=254749c717e6c54da854b850f7bbaf51';
var units = '&units=metric';
var weather;
var input;






function preload(){
	
	
	
	}

function setup() {
	noCanvas();
	//var btn = select('#submit');
	//input = select('#city');
	//btn.mousePressed(askForData);
	
	
	
}



function askForData() {
	var url = api + input.value() + apiKey + units;
	loadJSON(url, gotData);
}

function gotData(data){
	weather = data;
	console.log(weather);
}


