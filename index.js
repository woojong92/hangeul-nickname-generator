import prefix from "./lib/prifix.js";
import words from "./lib/words.js";

export default function hangeulNicknameGenerator() {
  const prefixRandomNumber = Math.floor(Math.random() * prefix.length);
  const wordsRandomNumber = Math.floor(Math.random() * words.length);

  return prefix[prefixRandomNumber] + words[wordsRandomNumber];
}
