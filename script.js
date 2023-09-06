export async function getWeather(apiKey, zip, updateUI) {
  const units = 'imperial';
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`;
  try {
    const res = await fetch(path);
    const json = await res.json();
    updateUI(json);
  } catch (err) {
    console.log(err.message);
  }
}
