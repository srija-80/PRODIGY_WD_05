document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'fe6193b492263035a3291b90251c0ea0';  // Replace with your actual API key
    const fetchWeatherButton = document.getElementById('fetch-weather');
    const locationInput = document.getElementById('location-input');
    const locationDisplay = document.getElementById('location');
    const temperatureDisplay = document.getElementById('temperature');
    const conditionsDisplay = document.getElementById('conditions');

    fetchWeatherButton.addEventListener('click', () => {
        const location = locationInput.value.trim();
        if (location) {
            fetchWeather(location);
        }
    });

    function fetchWeather(location) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Weather data not found');
                }
                return response.json();
            })
            .then(data => {
                displayWeather(data);
            })
            .catch(error => {
                alert(error.message);
            });
    }

    function displayWeather(data) {
        const { name, main, weather } = data;
        locationDisplay.textContent = `Location: ${name}`;
        temperatureDisplay.textContent = `Temperature: ${main.temp}°C`;
        conditionsDisplay.textContent = `Conditions: ${weather[0].description}`;
    }

    function resetWeatherDisplay() {
        locationDisplay.textContent = '';
        temperatureDisplay.textContent = '';
        conditionsDisplay.textContent = '';
    }
});
