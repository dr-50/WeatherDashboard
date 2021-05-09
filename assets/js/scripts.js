var weatherSearchEl = document.querySelector("#weatherSearch");
var weatherSearchHistoryEl=document.querySelector("#weatherSearchHistory");
var cityNameInputEl = document.querySelector("#cityname");
var weatherCityEl = document.getElementById("weatherCity");
var searchHistoryEl = document.getElementById("search-history");
var currentTempEl = document.getElementById("currentTemp");
var currentWindEl = document.getElementById("currentWind");
var currentHumdityEl = document.getElementById("currentHumdity");

var nextDayDateEl = document.getElementById("nextDayDate");
var nextDayImg = document.getElementById("nextDayImg");
var nextDayTempEl = document.getElementById("nextDayTemp");
var nextDayWindEl = document.getElementById("nextDayWind");
var nextDayHumidity = document.getElementById("nextDayHumidity");

var twoDayDateEl = document.getElementById("twoDayDate");
var twoDayImg = document.getElementById("twoDayImg");
var twoDayTempEl = document.getElementById("twoDayTemp");
var twoDayWindEl = document.getElementById("twoDayWind");
var twoDayHumidity = document.getElementById("twoDayHumidity");

var threeDayDateEl = document.getElementById("threeDayDate");
var threeDayImg = document.getElementById("threeDayImg");
var threeDayTempEl = document.getElementById("threeDayTemp");
var threeDayWindEl = document.getElementById("threeDayWind");
var threeDayHumidity = document.getElementById("threeDayHumidity");

var fourDayDateEl = document.getElementById("fourDayDate");
var fourDayImg = document.getElementById("fourDayImg");
var fourDayTempEl = document.getElementById("fourDayTemp");
var fourDayWindEl = document.getElementById("fourDayWind");
var fourDayHumidity = document.getElementById("fourDayHumidity");

var fiveDayDateEl = document.getElementById("fiveDayDate");
var fiveDayImg = document.getElementById("fiveDayImg");
var fiveDayTempEl = document.getElementById("fiveDayTemp");
var fiveDayWindEl = document.getElementById("fiveDayWind");
var fiveDayHumidity = document.getElementById("fiveDayHumidity");

var newExistingCheck = '';

var formSubmitHandler = function(event){
    event.preventDefault();
    var cityname = cityNameInputEl.value.trim();
    newExistingCheck="New";
    

    if(cityname){
        getCityWeather(cityname);
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
                weatherCityEl.innerHTML = data.name;
                     //return temp
                console.log(data.main.temp);
                currentTempEl.innerHTML="Temp: "+ ((data.main.temp-273.15)*(9/5)+32).toFixed(2) + "*F";
                    //return wind
                console.log(data.wind.speed);
                currentWindEl.innerHTML="Wind: " + data.wind.speed+ "MPH";
                    //return humidity
                console.log(data.main.humidity);
                currentHumdityEl.innerHTML="Humidity: "+data.main.humidity+"%";
                    //return UV index
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
                console.log(data)
                //return next day noon date
                console.log(data.list[3].dt_txt)
                nextDayDateEl.innerHTML=data.list[3].dt_txt
                //return next day noon image
                console.log(`http://openweathermap.org/img/wn/${data.list[3].weather[0].icon}@2x.png`)
                nextDayImg.setAttribute('src',`http://openweathermap.org/img/wn/${data.list[3].weather[0].icon}@2x.png`)
                //return next day noon temp
                console.log((data.list[3].main.temp-273.15)*(9/5)+32);
                nextDayTempEl.innerHTML="Temp: "+((data.list[3].main.temp-273.15)*(9/5)+32).toFixed(0) + "*F";
                //return next day noon wind
                console.log(data.list[3].wind.speed);
                nextDayWindEl.innerHTML="Wind: "+data.list[3].wind.speed.toFixed(0)+"MPH";
                //return next day noon humidity
                console.log(data.list[3].main.humidity);
                nextDayHumidity.innerHTML="Humidity: "+data.list[3].main.humidity+"%";

                //return two day out noon date
                console.log(data.list[11].dt_txt);
                twoDayDateEl.innerHTML=data.list[11].dt_txt;
                //return two day out noon image
                console.log(data.list[11].weather[0].icon);
                twoDayImg.setAttribute('src',`http://openweathermap.org/img/wn/${data.list[11].weather[0].icon}@2x.png`)
                //return two day out noon temp
                console.log((data.list[11].main.temp-273.15)*(9/5)+32);
                twoDayTempEl.innerHTML="Temp: "+((data.list[11].main.temp-273.15)*(9/5)+32).toFixed(0) + "*F";
                //return two day out noon wind
                console.log(data.list[11].wind.speed);
                twoDayWindEl.innerHTML="Wind: "+data.list[11].wind.speed.toFixed(0)+"MPH";
                //return two day out noon humidity
                console.log(data.list[11].main.humidity);
                twoDayHumidity.innerHTML="Humidity: "+data.list[11].main.humidity+"%";

                //return three day out noon date
                console.log(data.list[19].dt_txt);
                threeDayDateEl.innerHTML=data.list[19].dt_txt
                //return three day out noon image
                console.log(data.list[19].weather[0].icon);
                threeDayImg.setAttribute('src',`http://openweathermap.org/img/wn/${data.list[19].weather[0].icon}@2x.png`)
                //return three day out noon temp
                console.log((data.list[19].main.temp-273.15)*(9/5)+32);
                threeDayTempEl.innerHTML="Temp: "+((data.list[19].main.temp-273.15)*(9/5)+32).toFixed(0) + "*F";
                //return three day out noon wind
                console.log(data.list[19].wind.speed);
                threeDayWindEl.innerHTML="Wind: "+data.list[19].wind.speed.toFixed(0)+"MPH";
                //return three day out noon humidity
                console.log(data.list[19].main.humidity);
                threeDayHumidity.innerHTML="Humidity: "+data.list[19].main.humidity+"%";

                //return four day out noon date
                console.log(data.list[27].dt_txt);
                fourDayDateEl.innerHTML=data.list[27].dt_txt
                //return four day out noon image
                console.log(data.list[27].weather[0].icon);
                fourDayImg.setAttribute('src',`http://openweathermap.org/img/wn/${data.list[27].weather[0].icon}@2x.png`)
                //return four day out noon temp
                console.log((data.list[27].main.temp-273.15)*(9/5)+32);
                fourDayTempEl.innerHTML="Temp: "+((data.list[27].main.temp-273.15)*(9/5)+32).toFixed(0) + "*F";
                //return four day out noon wind
                console.log(data.list[27].wind.speed);
                fourDayWindEl.innerHTML="Wind: "+data.list[27].wind.speed.toFixed(0)+"MPH";
                //return four day out noon humidity
                console.log(data.list[27].main.humidity);
                fourDayHumidity.innerHTML="Humidity: "+data.list[27].main.humidity+"%";

                //return five day out noon date
                console.log(data.list[35].dt_txt)
                fiveDayDateEl.innerHTML=data.list[35].dt_txt
                //return five day out noon image
                console.log(data.list[35].weather[0].icon)
                fiveDayImg.setAttribute('src',`http://openweathermap.org/img/wn/${data.list[35].weather[0].icon}@2x.png`)
                //return five day out noon temp
                console.log((data.list[35].main.temp-273.15)*(9/5)+32)
                fiveDayTempEl.innerHTML="Temp: "+((data.list[35].main.temp-273.15)*(9/5)+32).toFixed(0) + "*F";
                //return five day out noon wind
                console.log(data.list[35].wind.speed)
                fiveDayWindEl.innerHTML="Wind: "+data.list[35].wind.speed.toFixed(0)+"MPH";
                //return five day out noon humidity
                console.log(data.list[35].main.humidity)
                fiveDayHumidity.innerHTML="Humidity: "+data.list[35].main.humidity+"%";

                console.log(newExistingCheck);
                if (newExistingCheck==="New"){
                historyLog();
                }
                newExistingCheck='';
            })
        }else{
            alert("error: "+ response.statusText);
        }
    })
}

var historyLog = function(city){
    console.log(cityname.value);
    if (cityname.value!==""){
    if (localStorage.getItem("CitySearch")===null){
        localStorage.setItem("CitySearch",cityname.value.toUpperCase());
    }else{
        var citySearchHistoryLocalStorage=localStorage.getItem("CitySearch");
        localStorage.setItem("CitySearch",citySearchHistoryLocalStorage + ", " + cityname.value.toUpperCase());
    }

    if (localStorage.getItem("CitySearch")!==null){
        var searchHistoryArr = localStorage.getItem("CitySearch").split(", ");
        console.log(searchHistoryArr.includes(cityname.value.toUpperCase()))
        searchHistoryEl.innerHTML=''

        for (var i=0; i<searchHistoryArr.length; i++){
            var historySearchButton = document.createElement("button");
            historySearchButton.id=searchHistoryArr[i];
            historySearchButton.textContent=searchHistoryArr[i];
            historySearchButton.className="weatherSearchHistory";
            historySearchButton.addEventListener("click", historySearch);
            searchHistoryEl.appendChild(historySearchButton);
        }
    }
    }

    // if (localStorage.getItem("CitySearch")===null){
    //     localStorage.setItem("CitySearch",cityname.value.toUpperCase());
    //         var historySearchButton = document.createElement("button");
    //         historySearchButton.id=cityname.value.toUpperCase();
    //         historySearchButton.textContent=cityname.value.toUpperCase();
    //         historySearchButton.className="weatherSearchHistory";
    //         historySearchButton.addEventListener("click", historySearch);
    //         searchHistoryEl.appendChild(historySearchButton);
    //         cityNameInputEl.value='';
    // }else{
    //     //delete existing buttons to avoid duplicates
    //     searchHistoryEl.innerHTML='';
    //     weatherSearchHistoryEl.appendChild(searchHistoryEl);

    //     var searchHistoryArr = localStorage.getItem("CitySearch").split(", ");
    //     console.log(searchHistoryArr.includes(cityname.value.toUpperCase()))
    //     if(searchHistoryArr.includes(cityname.value.toUpperCase())===false){
    //     var citySearchHistoryLocalStorage=localStorage.getItem("CitySearch");
    //     localStorage.setItem("CitySearch",citySearchHistoryLocalStorage + ", " + cityname.value.toUpperCase());

    //     for(let i=0; i<searchHistoryArr.length+1; i++){
    //         var historySearchButton = document.createElement("button");
    //         historySearchButton.id=searchHistoryArr[i];
    //         historySearchButton.textContent=searchHistoryArr[i];
    //         historySearchButton.className="weatherSearchHistory";
    //         historySearchButton.addEventListener("click", historySearch);
    //         searchHistoryEl.appendChild(historySearchButton);
    //         cityNameInputEl.value='';
    //     }} else {
    //         //do nothing
    //     }
        
    }
//     var searchHistoryArr = localStorage.getItem("CitySearch").split(", ");
//     console.log(searchHistoryArr);

// }


var historySearch = function(){
    
    event.preventDefault();
    console.log(this.id);
    
    
    var cityname = this.id;
    console.log(cityname);
    cityNameInputEl.textContent=cityname
    

    if(cityname){
        getCityWeather(cityname);
        getCityWeatherFive(cityname);
        
    } else {
        alert("Please enter a city");
    }
}

weatherSearchEl.addEventListener("submit", formSubmitHandler);
weatherSearchHistoryEl.addEventListener("submit", historySearch);
window.onload = historyLog();