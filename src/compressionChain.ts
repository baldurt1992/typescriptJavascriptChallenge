function compressionChain(input: string): string {
  if (input.length === 0) {
    return "";
  }

  let compressedString: string = "";
  let currentChar = input[0];
  let count = 1;

  for (let i = 1; i < input.length; i++) {
    if (input[i] === currentChar) {
      count++;
    } else {
      compressedString += currentChar + count;
      currentChar = input[i];
      count = 1;
    }
  }

  compressedString += currentChar + count;

  return compressedString;
}

console.log(compressionChain("abcccccdddddd"));
console.log(compressionChain("aaaabbbbccccc"));
console.log(compressionChain("aabcccccaaa"));
console.log(compressionChain(""));
