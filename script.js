const btn = document.getElementById('btn');
const reveal = document.getElementById('reveal');

const messages = [
  'Hay un mensaje importante de Thiago',
  'Otra vez',
  'No me diste',
  'A que esperas, hay un mensaje importante de Thiago',
  'Último click, te lo prometo',
];

let clicks = 0;
let locked = false;

function moveButton() {
  const padding = 24;
  const rect = btn.getBoundingClientRect();
  const maxLeft = Math.max(padding, window.innerWidth - rect.width - padding);
  const maxTop = Math.max(padding, window.innerHeight - rect.height - padding);

  const left = Math.random() * (maxLeft - padding) + padding;
  const top = Math.random() * (maxTop - padding) + padding;

  btn.classList.remove('centered');
  btn.style.left = `${left}px`;
  btn.style.top = `${top}px`;
}

btn.addEventListener('click', () => {
  if (locked) return;

  if (clicks < messages.length) {
    // still cycling through the 5 messages, one per click
    locked = true;
    btn.textContent = messages[clicks];
    clicks++;
    moveButton();
    setTimeout(() => { locked = false; }, 400);
  } else {
    // this is the extra click on "Último click, te lo prometo" itself
    btn.classList.add('hidden');
    setTimeout(() => {
      reveal.classList.remove('hidden');
    }, 700);
  }
});
