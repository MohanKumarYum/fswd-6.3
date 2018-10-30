var temperatureInCelsius = 40;

var celsiusToFahrenheit = (temperatureInCelsius * 9) / 5 + 32

var fahrenheitToCelsius = ((celsiusToFahrenheit - 32) * 5) / 9;

console.log("Temperature of " + temperatureInCelsius + " celsius, will be " + celsiusToFahrenheit + " fahrenheit");
console.log("Temperature of " + celsiusToFahrenheit + " fahrenheit, will be " + fahrenheitToCelsius + " celsius");
