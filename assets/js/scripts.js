var weatherSearchEl = document.querySelector("#weatherSearch");
var cityNameInputEl = document.querySelector("#cityname");

var formSubmitHandler = function(event){
    event.preventDefault();
    var cityname = cityNameInputEl.value.trim();

    if(cityname){
        getCityWeather(cityname);
        cityNameInputEl.value="";
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
            })
        }else{
            alert("error: "+ response.statusText);
        }
    })
}

weatherSearchEl.addEventListener("submit", formSubmitHandler);