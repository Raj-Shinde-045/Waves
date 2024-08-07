const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

function drawWave(amplitude, frequency, color) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    for (let x = 0; x < width; x++) {
        const y = height / 2 + amplitude * Math.sin((x / width) * Math.PI * 2 * frequency);
        ctx.lineTo(x, y);
    }
    ctx.stroke();
}

function drawSuperposition() {
    const amp1 = document.getElementById('amp1').value;
    const freq1 = document.getElementById('freq1').value;
    const amp2 = document.getElementById('amp2').value;
    const freq2 = document.getElementById('freq2').value;

    ctx.clearRect(0, 0, width, height);

    drawWave(amp1, freq1, 'blue');
    drawWave(amp2, freq2, 'red');

    ctx.beginPath();
    ctx.strokeStyle = 'purple';
    for (let x = 0; x < width; x++) {
        const y1 = height / 2 + amp1 * Math.sin((x / width) * Math.PI * 2 * freq1);
        const y2 = height / 2 + amp2 * Math.sin((x / width) * Math.PI * 2 * freq2);
        const y = y1 + y2 - height / 2;
        ctx.lineTo(x, y);
    }
    ctx.stroke();
}

document.getElementById('amp1').addEventListener('input', drawSuperposition);
document.getElementById('freq1').addEventListener('input', drawSuperposition);
document.getElementById('amp2').addEventListener('input', drawSuperposition);
document.getElementById('freq2').addEventListener('input', drawSuperposition);

drawSuperposition();