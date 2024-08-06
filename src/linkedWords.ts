function linkedWords(words: string[]): boolean {
  const graph: { [key: string]: string[] } = {};

  for (const word of words) {
    const firstChar = word[0];
    if (!graph[firstChar]) {
      graph[firstChar] = [];
    }
    graph[firstChar].push(word);
  }

  const visited = new Set<string>();

  function dfs(currentWord: string, count: number): boolean {
    if (count === words.length) {
      return true;
    }

    const lastChar = currentWord[currentWord.length - 1];
    if (!graph[lastChar]) {
      return false;
    }

    for (let i = 0; i < graph[lastChar].length; i++) {
      const nextWord = graph[lastChar][i];
      if (!visited.has(nextWord)) {
        visited.add(nextWord);
        if (dfs(nextWord, count + 1)) {
          return true;
        }
        visited.delete(nextWord);
      }
    }
    return false;
  }

  for (const word of words) {
    visited.add(word);
    if (dfs(word, 1)) {
      return true;
    }
    visited.delete(word);
  }

  return false;
}

console.log(linkedWords(["apple", "egg", "giraffe", "elephant"]));
console.log(linkedWords(["apple", "egg", "giraffe", "hat"]));
