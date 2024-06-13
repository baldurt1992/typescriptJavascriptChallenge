function temperatureConverter(value: number, convertTo: string): void {
  let result: number = 0;

  if (convertTo === "c") {
    result = (value * 9) / 5 + 32;
    console.log(
      `${value}°${convertTo.toUpperCase()} es igual a, ${result.toFixed(1)}, °F`
    );
  } else if (convertTo === "f") {
    result = ((value - 32) * 5) / 9;
    console.log(
      `${value}°${convertTo.toUpperCase()} es igual a, ${result.toFixed(1)}, °C`
    );
  } else {
    console.log("Tipo de conversión no válido");
  }
}

const celsiusToFahrenheit = temperatureConverter(25, "f");

const fahrenheitToCelsius = temperatureConverter(77, "c");
