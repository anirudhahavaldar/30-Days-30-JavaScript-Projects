// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example
const qrCode = document.getElementById('qr-code');
const generateBtn = document.getElementById('generate-btn');
const inputEl = document.getElementById('input-el');

generateBtn.addEventListener('click', () => {
  if (inputEl.value != '') {
    const img = document.createElement('img');
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputEl.value}`;
    qrCode.appendChild(img);
  } else {
    alert('Enter the text or URL to generate the QR Code!');
  }
});
