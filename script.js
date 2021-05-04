//Color Flipper

// when clicking on button that has 'btn' ID, then execute function changeBGAndNumber
console.log('A'); // TODO THIS COMMIT: remove this
let button = document.getElementById('btn');

button.addEventListener('click', changeBGAndNumber);

// changes number of HEX and backgroundcolor of app's container
function changeBGAndNumber() {
  console.log('B'); // TODO THIS COMMIT: remove this
  let randomColor = getHexString();
  turnBGColorToRandomColor(randomColor);
  changeTextOfHex(randomColor);
}

let bGColor = document.getElementById('color-flipper-container');
let hexText = document.getElementById('hex-color');

// 6 random letters and numbers need to be generated and put into a string.
function getHexString() {
  let hexString = '';
  // Array of letters and numbers
  for (var index = 0; index < 6; index++) {
    const numbersAndLetters = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
];
    hexString = hexString.concat(getRandomLetterOrNumber(numbersAndLetters));
  }
  return hexString.toUpperCase();
}

function getRandomLetterOrNumber(numbersAndLetters) {
  let randomIndex = Math.floor(Math.random() * numbersAndLetters.length);
  return numbersAndLetters[randomIndex];
}

function turnBGColorToRandomColor(randomColor) {
  bGColor.style.backgroundColor = '#'.concat(randomColor);
}

function changeTextOfHex(randomColor) {
  hexText.innerHTML = randomColor;
}


// Random Password Generator
