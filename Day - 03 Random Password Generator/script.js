import { characters } from './characters.js';
console.log(characters.length);
console.log(Math.floor(Math.random() * characters.length));

while (Math.floor(Math.random() * characters.length) + 1 === 94) {
  console.log('yes');
}
function randomCharacter() {
  return Math.floor(Math.random() * characters.length);
}
