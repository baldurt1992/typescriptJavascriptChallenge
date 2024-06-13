function bmiCalculator(weight: number, height: number): void {
  if (weight <= 0 || height <= 0 || weight === null || height === null) {
    console.error("Error: El peso y la altura deben ser valores positivos.");
    return;
  }

  const bmi: number = weight / (height * height);
  console.log("-----Un BMI adecuado debería estar entre 18.5 y 24.9.-----");

  let message: string;

  if (bmi < 18.5) {
    message = "por debajo del recomendado, debes aumentar peso.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    message = "en el rango recomendado.";
  } else if (bmi > 25 && bmi < 29.9) {
    message = "con sobrepeso.";
  } else {
    message = "con obesidad.";
  }

  console.log(
    `Tu BMI es: ${bmi.toFixed(2)}, tu BMI sugiere que estás ${message}`
  );
}

bmiCalculator(82.3, 1.88);
