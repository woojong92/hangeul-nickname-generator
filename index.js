const words = require("./lib/words");

function hangleNicknameGenerator() {
  const adjective = words.Personality;
  const none = words.Noun;
  const adjectiveRandomNumber = Math.floor(Math.random() * adjective.length);
  const noneRandomNumber = Math.floor(Math.random() * none.length);

  console.log(adjective[adjectiveRandomNumber] + none[noneRandomNumber]);
}

const init = () => {
  for (let i = 0; i < 10; i++) {
    hangleNicknameGenerator();
  }
};

init();

// module.exports = hangleNicknameGenerator;
