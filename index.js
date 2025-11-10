let argv = process.argv.slice(2);
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let shift;
let wordToEncrypt = argv[0].toLowerCase();
if (
  argv[1] &&
  (Math.sign(parseInt(argv[1])) === 1 || Math.sign(parseInt(argv[1])) === -1)
) {
  shift = parseInt(argv[1]);
  if (shift > 26 || shift < -26) {
    if (shift > 26) {
      shift = shift - Math.floor(Math.abs(shift) / 26) * 26;
    } else {
      shift = shift + Math.floor(Math.abs(shift) / 26) * 26;
    }
  }
} else {
  console.log("The second argument must be an integer.");
  process.exit("1");
}
let wordToEncryptArray = [];
for (let i = 0; i < wordToEncrypt.length; i++) {
  wordToEncryptArray.push(wordToEncrypt[i]);
}
function getPositionInAlphabet(letter) {
  return alphabet.indexOf(letter);
}
function getNeuChar(char, shift) {
  let charToReturn;
  if (alphabet.includes(char)) {
    let newPositon;
    let currentPosition = getPositionInAlphabet(char);
    if (shift > 0) {
      if (currentPosition + shift > 25) {
        newPositon = shift - 1 - (25 - currentPosition);
      } else {
        newPositon = currentPosition + shift;
      }
    } else {
      if (currentPosition + shift >= 0 && currentPosition + shift < 25) {
        newPositon = currentPosition + shift;
      } else {
        newPositon = 25 + (currentPosition + shift) + 1;
      }
    }
    charToReturn = alphabet[newPositon];
  } else {
    charToReturn = char;
  }
  return charToReturn;
}
const wordToEncryptArrayNew = wordToEncryptArray.map((char) =>
  getNeuChar(char, shift)
);
console.log(`The encrypted phrase: ${wordToEncryptArrayNew.join("")}`);
