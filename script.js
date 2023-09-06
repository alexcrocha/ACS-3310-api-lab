// Functions
export function getWeather(zip) {
  // Replace this with your own API key!
  const units = 'imperial'
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
  fetch(path)
    .then(res => res.json())
    .then(json => {
      tempEl.innerHTML = json.main.temp
      descEl.innerHTML = json.weather[0].description
    })
    .catch(err => console.log(err.message))
}
