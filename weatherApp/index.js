// Replace YOUR_API_KEY with your actual API key
const API_KEY = 'YOUR_API_KEY';

// Replace CITY_NAME with the name of the city you want to get weather data for
const cityName = 'CITY_NAME';

// Set up the base URL for the API
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Construct the full API URL with the city name and API key
const apiUrl = `${baseUrl}?q=${cityName}&appid=${API_KEY}`;

// Make a GET request to the API using fetch
fetch(apiUrl)
  .then(response => response.json()) // Parse the response as JSON
  .then(data => {
    // Extract the data we want from the response
    const { main, name } = data;
    const { temp, feels_like, temp_min, temp_max } = main;
    const weather = data.weather[0];
    const { description, icon } = weather;

    // Use the data to display the weather to the user
    const weatherContainer = document.querySelector('.weather');
    weatherContainer.innerHTML = `
      <p>The weather in ${name} is currently ${description}</p>
      <p>Temperature: ${temp}°F</p>
      <p>Feels like: ${feels_like}°F</p>
      <p>Low: ${temp_min}°F / High: ${temp_max}°F</p>
    `;

    // You can also use the icon code to display an icon for the current weather
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    const iconElement = document.createElement('img');
    iconElement.src = iconUrl;
    weatherContainer.appendChild(iconElement);
  });
