const apiKey ="be8c2a1c8255d016c29f05db8d6b2299";


const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox= document.querySelector('.search input');
const searchbtn= document.querySelector('.search button');
const weatherIcon = document.querySelector('.weathericon');
async function  checkWeather (city) {
    const response = await fetch (apiUrl +  `${city} &appid=${apiKey}`);
  
    if(response.status==404){
      document.querySelector(".error").style.display="block";
      document.querySelector(".weather").style.display="none";
    }else{
      var data = await response.json();
  document.querySelector(".city").innerHTML=data.name;
  document.querySelector(".temp").innerHTML= Math.round(data.main.temp) +"°C";
  document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
  document.querySelector(".wind").innerHTML=data.wind.speed +"km/h";

if(data.weather[0].main=="Clouds"){
weatherIcon.src="weather/images/clouds.png"
}else if(data.weather[0].main=="Clear"){
  weatherIcon.src="weather/images/clear.png"
}else if(data.weather[0].main=="Rain"){
  weatherIcon.src="weather/images/rain.png"
}
else if(data.weather[0].main=="Drizzle"){
  weatherIcon.src="weather/images/drizzle.png"
}
else if(data.weather[0].main=="Mist"){
  weatherIcon.src="weather/images/mist.png"
}

document.querySelector(".weather").style.display="block";
document.querySelector(".error").style.display="none";

    }
    
}

searchbtn.addEventListener("click", ()=> {
  checkWeather(searchbox.value);
});

checkWeather ();
