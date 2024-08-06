function countVowelsAndConsonants(text: string): {
  vowels: number;
  consonants: number;
} {
  const vowelsList = ["a", "e", "i", "o", "u"];
  let vowelsCount = 0;
  let consonantsCount = 0;

  const normalizedText = text.toLowerCase();

  for (let char of normalizedText) {
    if (vowelsList.includes(char)) {
      vowelsCount++;
    } else if (char >= "a" && char <= "z") {
      consonantsCount++;
    }
  }

  return { vowels: vowelsCount, consonants: consonantsCount };
}

const examples2 = [
  "Hello World",
  "The quick brown fox",
  "Anita lava la tina",
  "Programming is fun",
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "aeiouAEIOU",
  " ",
];

examples2.forEach((example) => {
  const { vowels, consonants } = countVowelsAndConsonants(example);
  console.log(`"${example}" - Vowels: ${vowels}, Consonants: ${consonants}`);
});
