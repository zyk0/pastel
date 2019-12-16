/*
function getLocation() {
  return axios.get("https://ipapi.co/217.114.236.135/city/");
}
*/
/*
function getWeather() {
	//let location = "";
    //let units = "&units=metric";
    //let appid = "&APPID=48e67de556beb085a793a21ea93a7584";
    //return axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + location + units + appid);
	return axios.get("https://api.openweathermap.org/data/2.5/weather?q=Yekaterinburg&units=metric&APPID=48e67de556beb085a793a21ea93a7584");
	//return axios.get("https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&APPID=48e67de556beb085a793a21ea93a7584");
}
*/



/////////////////////////////////
let apiurl = "https://api.openweathermap.org/data/2.5/weather?q=Yekaterinburg&units=metric&APPID=48e67de556beb085a793a21ea93a7584";

fetch(apiurl).then(
	function(response) {
      if (Math.floor(response.status / 100) !== 2) {	  
          console.log('pogoda_ problem. Status Code: ' + response.status);
      }else{
		  console.log('pogoda_ good. Status Code: ' + response.status); //200
		  response.json().then(function(data) {
			  
			  console.log('pogoda_ typeof data: ' + typeof data); //200
			  
			  
			  /*
			  let name = data.name;
			  let todaypogoda = document.querySelector('.name')  
			  todaypogoda.innerHTML = name;
			  */
			  let temp = data.main.temp;
			  let todaytemp = document.querySelector('.temp')  
			  todaytemp.innerHTML = temp;
			  console.log('pogoda_ temp: ' + temp);
			  
			  let clouds = data.clouds.all;
			  let todayclouds = document.querySelector('.clouds')  
			  todayclouds.innerHTML = clouds;
			  console.log('pogoda_ clouds: ' + clouds);
			  
			  let wind = data.wind.speed;
			  let todaywind = document.querySelector('.wind')  
			  todaywind.innerHTML = wind;
			  console.log('pogoda_ wind: ' + wind);
			  
			  
			  let weatherid = data.weather.id;
			  //let todayweatherid = document.querySelector('.weatherid')  
			  //todayweatherid.innerHTML = weatherid;
			  console.log('pogoda_ weatherid: ' + weatherid);
			  
		  });
	  }
    }
  )
  .catch(function(err) {
    console.log('Fetch Error: ', err);
  });
  
  
