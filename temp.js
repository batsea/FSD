let temperatureConverter = {
    toCelsius(fahrenheit) {
        return ((fahrenheit - 32) * 5) / 9;
    },
    toFahrenheit(celsius) {
        return (celsius * 9) / 5 + 32;
    }
};

let celsiusTemp = 25;
let fahrenheitTemp = 77;

console.log(`${celsiusTemp}°C in Fahrenheit: ${temperatureConverter.toFahrenheit(celsiusTemp)}°F`);
console.log(`${fahrenheitTemp}°F in Celsius: ${temperatureConverter.toCelsius(fahrenheitTemp)}°C`);
