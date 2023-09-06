// Functions
export function getWeather(apiKey, zip, updateUI) {
  // Replace this with your own API key!
  const units = 'imperial'
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
  fetch(path)
    .then(res => res.json())
    .then(json => updateUI(json))
    .catch(err => console.log(err.message))
}
