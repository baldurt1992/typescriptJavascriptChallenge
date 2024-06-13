function generateUsername(name: string, lastName: string): string | null {
  if (
    (typeof name !== "string" && typeof lastName !== "string") ||
    (!name.trim() && !lastName.trim())
  ) {
    console.log("Por favor ingresa un nombre válido.");
    return null;
  }

  const formattedName = removeSpecialCharacters(formatString(name));
  const formattedLastName = removeSpecialCharacters(formatString(lastName));

  const username = generateUsernameFromNames(formattedName, formattedLastName);

  const randomNumber = Math.floor(Math.random() * 100);
  const finalUsername = `${username}${randomNumber}`;

  return finalUsername;
}

function formatString(input: string): string {
  return input.trim().toLowerCase();
}

function removeSpecialCharacters(input: string): string {
  return input
    .replace(/[áäàÁÄÀ]/g, "a")
    .replace(/[éëèÉËÈ]/g, "e")
    .replace(/[íïìÍÏÌ]/g, "i")
    .replace(/[óöòÓÖÒ]/g, "o")
    .replace(/[úüùÚÜÙ]/g, "u")
    .replace(/[ñÑ]/g, "n");
}

function generateUsernameFromNames(name: string, lastName: string): string {
  const partialName = name.substring(0, 6);
  const partialLastName = lastName.substring(0, 2);
  return `${partialName}.${partialLastName}`;
}

const name1 = "Andrés Baldur";
const lastName = "Tamayo Marín";
const username = generateUsername(name1, lastName);
console.log(username);
