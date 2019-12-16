function getLocation() {
  // return axios.get("https://ipapi.co/json/");
  return axios.get("https://ipapi.co/217.114.236.135/city/");
}

function getWeather(location) {
	//let location = "";
    //let units = "&units=metric";
    //let appid = "&APPID=48e67de556beb085a793a21ea93a7584";
    //return axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + location + units + appid);
	
	return axios.get("https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&APPID=48e67de556beb085a793a21ea93a7584");
}

class Pogoda extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      format: 'C',
      location: '',
      weather: '',
      temp: ''
    };
  }
  
  componentDidMount() { 
    let _this = this;
	//let defaultcity = 'Moscow'; //DefaultCity
	
    getLocation().then(function(result) { 
		let loc = result.data.city + ' '
		console.log(typeof loc); //typeof loc - string
        //let loc = result.data.city + ', ' + result.data.country;
		//request to ipapi.co
      
        getWeather(loc).then(function(result) {

          _this.setState({
            location: loc,
            weather: result.data.weather[0],
            temp: result.data.main.temp
          })

        });	
    }).catch(
      _this.setState({
        location: '',
        temp: ''
      })

    );
  }

  render() {
    let hr = (new Date).getHours()
    let timesofday = (hr >= 20) ? 'night' : 'day';
    
    return (
        <div>
			<span>{this.state.location} <b>{this.state.temp}</b> &#8451; </span>
			<i className={'wi wi-owm-' + timesofday + '-' + this.state.weather.id}></i>
        </div>

    );
  }
}

ReactDOM.render(
  <Pogoda />, document.getElementById('pogoda')
);
