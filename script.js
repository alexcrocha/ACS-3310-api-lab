const parseInput = (input) => {
  const zip = /^\d{5}$/.test(input) ? input : null;
  const city = /^[a-zA-Z\s]+$/.test(input) ? input : null;
  const geo = /^(\-?\d+(\.\d+)?),\s*(\-?\d+(\.\d+)?)$/.test(input) ? input.split(',') : null;
  return { zip, city, geo };
};

export async function getWeather(apiKey, input, units, updateUI) {
  const { zip, city, geo } = parseInput(input);
  const query = zip ? `zip=${zip}` : geo ? `lat=${geo[0].trim()}&lon=${geo[1].trim()}` : `q=${city}`;
  const path = `https://api.openweathermap.org/data/2.5/weather?${query}&appid=${apiKey}&units=${units}`;

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
    updateUI({ temp: '', description: 'Location not found' });
  }
}

