const canvas = document.getElementById('matrixRain');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const matrixCode = 'アカサタナハマヤラワン1234567890';
const letras = matrixCode.split('');
const fontSize = 16;
const columns = canvas.width/fontSize;

const drops = [];

for(let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function draw() {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#0F0'; // Verde estilo Matrix
    context.font = fontSize + 'px monospace';

    for(let i = 0; i < drops.length; i++) {
        const text = letras[Math.floor(Math.random() * letras.length)];
        context.fillText(text, i*fontSize, drops[i]*fontSize);

        if(drops[i]*fontSize > canvas.height && Math.random() > 0.989) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(draw, 33);
