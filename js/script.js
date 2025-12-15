
let count = 0;

const button = document.getElementById('counter-btn');
const text = document.getElementById('counter-text');

if (button && text) {
  button.addEventListener('click', () => {
    count++;
    text.textContent = `Кількість натискань: ${count}`;

    if (count % 2 === 0) {
      text.style.color = '#6a5acd';
    } else {
      text.style.color = '#333';
    }
  });
}
