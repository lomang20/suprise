const staticLine = document.getElementById('staticLine');
const typingText = document.getElementById('typingText');
const buttonsDiv = document.querySelector('.buttons');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const jawaban = document.getElementById('jawaban');

const lines = [
  "Sa mau bilang sesuatu....",
  "Saya selama ini mencoba untuk mendekati lu.",
  "Mungkin lu sudah tangkap sa pu tujuan kenapa saya PDKT dengan lu.",
  "Nah, sekarang sa mau bilang sesuatu...",
  "Saya suka deng lu, Vebry.",
  "Sa mau lu jadi sa pu pacar.",
];

const finalLine = "Lu mau ka snd jadi sa pu pacar?";

let currentLine = 0;
let currentChar = 0;
let isDeleting = false;
const typingSpeed = 50;
const pauseBetweenLines = 1500;

function type() {
  if (currentLine < lines.length) {
    let line = lines[currentLine];
    if (!isDeleting) {
      typingText.textContent = line.substring(0, currentChar + 1);
      currentChar++;
      if (currentChar === line.length) {
        isDeleting = true;
        setTimeout(type, pauseBetweenLines);
      } else {
        setTimeout(type, typingSpeed);
      }
    } else {
      typingText.textContent = line.substring(0, currentChar - 1);
      currentChar--;
      if (currentChar === 0) {
        isDeleting = false;
        currentLine++;
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(type, typingSpeed / 2);
      }
    }
  } else {
    // Tampilkan kalimat terakhir (finalLine) sekali saja
    typingText.textContent = finalLine;
    buttonsDiv.style.display = 'block';
  }
}

type();

yesBtn.onclick = () => {
  jawaban.innerText = 'Aaa makasih Vebry! Sa senang sekali 😍';

  setTimeout(() => {
    window.location.href = 'https://wa.me/6282211080146?text=Iya%20sa%20mau%20jadi%20ko%20pu%20pacar%20%F0%9F%A4%8D%F0%9F%92%95';
  }, 1500);
};

noBtn.onmouseover = () => {
  moveNoButton();
};

noBtn.onclick = (e) => {
  e.preventDefault();
  moveNoButton();
};

function moveNoButton() {
  noBtn.style.position = 'absolute';
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// Love rain
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 500);
