class WeatherAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    }

    // Method to fetch weather data by latitude and longitude
    async getWeatherByCoordinates(lat, lon) {
        const url = `${this.baseUrl}?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            const data = await response.json();
            return this.formatWeatherData(data);
        } catch (error) {
            console.error('Failed to fetch weather data:', error.message);
            throw error;
        }
    }

    // Method to format weather data
    formatWeatherData(data) {
        return {
            location: `${data.name}, ${data.sys.country}`,
            temperature: `${data.main.temp}°C`,
            weather: data.weather[0].description,
            humidity: `${data.main.humidity}%`,
            windSpeed: `${data.wind.speed} m/s`,
        };
    }
}

// Example Usage
(async () => {
    const apiKey = 'Your API Key'; // Replace with your OpenWeatherMap API key
    const weatherAPI = new WeatherAPI(apiKey);

    const latitude = 44.34; // Replace with the desired latitude
    const longitude = 10.99; // Replace with the desired longitude

    try {
        const weatherData = await weatherAPI.getWeatherByCoordinates(latitude, longitude);
        console.log('Weather Data:', weatherData);
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
    }
})();