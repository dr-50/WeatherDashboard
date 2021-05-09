var weatherSearchEl = document.querySelector("#weatherSearch");
var cityNameInputEl = document.querySelector("#cityname");

var formSubmitHandler = function(event){
    event.preventDefault();
    var cityname = cityNameInputEl.value.trim();

    if(cityname){
        //getCityWeather(cityname);
        //cityNameInputEl.value="";
        getCityWeatherFive(cityname);
    } else {
        alert("Please enter a city");
    }
}

var getCityWeather = function(city) {
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f70bac3dc5426bfdb76e72707800686a`;

    //make a request to the url
    fetch(apiUrl)
    .then(function(response){
        if(response.ok){
            console.log(response);
            response.json().then(function(data){
                console.log(data);
                //return data for first card
                console.log(data.name);
                     //return temp
                console.log(data.main.temp);
                    //return wind
                console.log(data.wind.speed);
                    //return humidity
                console.log(data.main.humidity);
                    //return UV index
                console.log()
            })
        }else{
            alert("error: "+ response.statusText);
        }
    })
}

var getCityWeatherFive = function(city){
    var apiUrlFive = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=f70bac3dc5426bfdb76e72707800686a`

    //make a request to the url
    fetch(apiUrlFive)
    .then(function(response){
        if(response.ok){
            console.log(response);
            response.json().then(function(data){
                console.log(data);
                //return next day noon date
                console.log(data.list[3].dt_txt)
                //return next day noon image
                console.log(data.list[3].weather[0].icon)
                //return next day noon temp
                console.log((data.list[3].main.temp-273.15)*(9/5)+32)
                //return next day noon wind
                console.log(data.list[3].wind.speed)
                //return next day noon humidity
                console.log(data.list[3].main.humidity)
            })
        }else{
            alert("error: "+ response.statusText);
        }
    })
}

weatherSearchEl.addEventListener("submit", formSubmitHandler);