function isPalindrome(text: string): boolean {
  const normalizedText = text.toLowerCase().replace(/[^a-z0-9]/g, "");

  const reversedText = normalizedText.split("").reverse().join("");
  return normalizedText === reversedText;
}

const examples = [
  "Anita lava la tina",
  "A man, a plan, a canal, Panama",
  "No 'x' in Nixon",
  "Hello, World!",
  "Was it a car or a cat I saw",
  "No lemon, no melon",
];

examples.forEach((example) => {
  if (isPalindrome(example)) {
    console.log(`"${example}" is a palindrome.`);
  } else {
    console.log(`"${example}" is not a palindrome.`);
  }
});
