const words = require("./lib/words");

function hangleNicknameGenerator() {
  const adjective = words.Personality;
  const none = words.Noun;
  const adjectiveRandomNumber = Math.floor(Math.random() * adjective.length);
  const noneRandomNumber = Math.floor(Math.random() * none.length);

  return adjective[adjectiveRandomNumber] + none[noneRandomNumber];
}

module.exports = hangleNicknameGenerator;
