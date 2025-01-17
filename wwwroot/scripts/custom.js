window.checkWeather = (cityName) => {
    //let weatherCityName = document.getElementById("weatherCity").value;
    //alert(cityName);

    const API_KEY = "..."
    return new Promise((resolve, reject) => {
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appId=${API_KEY}&units=metric`)
        .then(res => {
            if (!res.ok) {
                console.error(`HTTP error: ${res.status}`)
            }

            DotNet.invokeMethodAsync('WeatherApp', 'ShowFavoriteButton', cityName)

            return res.json();
        })
      .then(data => resolve(data))
      .catch(error => reject(error))
    })
  
}