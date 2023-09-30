import { characters } from './characters.js';
const generateBtn = document.getElementById('generate-btn');
const password = document.getElementById('password');
const copy = document.getElementById('copy');

function randomCharacter() {
  return characters[Math.floor(Math.random() * characters.length)];
}

generateBtn.addEventListener('click', () => {
  let password = '';
  for (let i = 1; i < 12; i++) {
    password += randomCharacter();
  }
  render(password);
});

function render(passedPassword) {
  password.innerHTML = `${passedPassword}`;
}

copy.addEventListener('click', () => {
  if (password.textContent === '') {
    alert('Please generate a password to copy');
  } else {
    navigator.clipboard.writeText(password.textContent);
    copy.innerText = 'Copied';
  }
});
