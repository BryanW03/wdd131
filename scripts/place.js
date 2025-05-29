document.addEventListener('DOMContentLoaded', function () {

    const currentYearSpan = document.getElementById('currentyear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const lastModifiedParagraph = document.getElementById('lastModified');
    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;
    }

    // Wind Chill Calculation
    const temperatureSpan = document.getElementById('temperature');
    const windSpeedSpan = document.getElementById('windspeed');
    const windChillSpan = document.getElementById('windchill');

    // Static values (can be read from spans or defined here)
    // Assuming Celsius and km/h based on typical international use
    const staticTemperatureC = 28; // °C (Value from HTML)
    const staticWindSpeedKmh = 10; // km/h (Value from HTML)


    function calculateWindChill(temperature, windSpeed) {
        // Formula requires temperature and wind speed to be numbers
        return (13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16))).toFixed(1);
    }


    if (temperatureSpan && windSpeedSpan && windChillSpan) {

        const currentTemperature = parseFloat(temperatureSpan.textContent);
        const currentWindSpeed = parseFloat(windSpeedSpan.textContent);

        if (currentTemperature <= 10 && currentWindSpeed > 4.8) {
            const windChillValue = calculateWindChill(currentTemperature, currentWindSpeed);
            windChillSpan.textContent = `${windChillValue} °C`;
        } else {
            windChillSpan.textContent = "N/A";
        }
    } else {
        console.error("One or more weather elements are missing in the HTML.");
    }

});