// Your OpenWeatherMap API key (you need to sign up for a free API key)
const API_KEY = 'YOUR_API_KEY_HERE';  // Replace with your actual API key

document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    getWeather(city);
});

function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                alert("City not found. Please try again.");
            }
        })
        .catch(error => {
            console.error("Error fetching the weather data:", error);
            alert("An error occurred. Please try again later.");
        });
}

function displayWeather(data) {
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const humidity = document.getElementById('humidity');
    const weatherInfo = document.getElementById('weather-info');

    // Update weather info
    cityName.textContent = `${data.name}, ${data.sys.country}`;
    temperature.textContent = `Temperature: ${data.main.temp}°C`;
    description.textContent = `Description: ${data.weather[0].description}`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;

    // Show the weather info
    weatherInfo.style.display = 'block';
}
