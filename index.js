const apiKeys = "e41c0f39a2cdefcef47be94aa87c906d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".input-box")
const searchBtn = document.querySelector(".button-box")

async function checkOut(city) {
    const response = await fetch(apiUrl+ city + `&appid=${apiKeys}`)

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".disply").style.display = "none"
    }
     else {
  var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name ;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humi-de").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-s").innerHTML = data.wind.speed +"km/h";

    if (data.weather[0].main == "Clouds") {
        document.querySelector(".w-icon").src = "image/clouds.png"
    }
     else if (data.weather[0].main == "Clear") {
        document.querySelector(".w-icon").src = "image/clear.png"
        
     }
     else if (data.weather[0].main == "Rain") {
        document.querySelector(".w-icon").src = "image/rain.png"
      
     }
     else if (data.weather[0].main == "Snow") {
        document.querySelector(".w-icon").src = "image/snow.png"

     }
     else if (data.weather[0].main == "Drizzle") {
        document.querySelector(".w-icon").src = "image/drizzle.png"

     }
    document.querySelector(".disply").style.display = "block"
    document.querySelector(".error").style.display = "none"

     }
   
}
 searchBtn.addEventListener("click",()=> {
   checkOut(searchBox.value);
 })

