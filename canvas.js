const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = [];
const confettiCount = 300;
const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'pink', 'purple', 'turquoise'];

for (let i = 0; i < confettiCount; i++) {
  confetti.push({
    color: colors[Math.floor(Math.random() * colors.length)],
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 4 + 1,
    d: Math.random() * confettiCount
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach((c, i) => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2, true);
    ctx.fillStyle = c.color;
    ctx.fill();
  });
  requestAnimationFrame(draw);
}

draw();
