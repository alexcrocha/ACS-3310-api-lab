export async function getWeather(apiKey, zip, units, updateUI) {
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`;
  try {
    const res = await fetch(path);
    const json = await res.json();
    const data = {
      temp: json.main.temp,
      description: json.weather[0].description,
    }
    updateUI(data);
  } catch (err) {
    console.log(err.message);
  }
}
