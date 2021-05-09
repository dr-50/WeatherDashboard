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
    var apiUrl = `https:....`;

    //make a request to the url
    fetch(apiUrl).then(function(response){
        response.json().then(function(data){
            console.log(data);
        })
    })
}
weatherSearchEl.addEventListener("submit", formSubmitHandler);