function toRoman(num: number): string {
  const romanNumerals: { value: number; numeral: string }[] = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  let result = "";
  for (const { value, numeral } of romanNumerals) {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  }
  return result;
}

function romanDate(date: string): string {
  const [day, month, year] = date.split("-").map(Number);
  const dayRoman = toRoman(day);
  const monthRoman = toRoman(month);
  const yearRoman = toRoman(year);

  return `${dayRoman}-${monthRoman}-${yearRoman}`;
}

console.log(romanDate("01-01-2021"));
console.log(romanDate("15-05-1998"));
console.log(romanDate("04-07-1776"));
