document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = '642f3b00b56087d8c5a42b11241d110d'; // Enter your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherDetails = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                `;

                document.getElementById('weatherDetails').innerHTML = weatherDetails;
            } else {
                document.getElementById('weatherDetails').innerHTML = '<p>City not found. Please try again.</p>';
            }
        })

        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('weatherDetails').innerHTML = '<p>Error fetching weather data. Please try again later.</p>';
        });
});