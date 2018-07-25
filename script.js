var ufo = document.getElementById('cIce');
var ufo = ufo.getContext('2d');

// box
ufo.beginPath();
ufo.moveTo(0, 0);
ufo.lineTo(400, 0);
ufo.lineTo(400, 400);
ufo.lineTo(0, 400);
ufo.fillStyle = '#0000FF';
ufo.fill();

// hat ovni
ufo.beginPath();
ufo.moveTo(170, 170);
ufo.quadraticCurveTo(200, 100, 230, 170);
ufo.lineWidth = '2';
ufo.fillStyle = '#FFF';
ufo.fill();

// body up ovni
ufo.beginPath();
ufo.moveTo(100, 200);
ufo.quadraticCurveTo(200, 130, 300, 200);
ufo.lineWidth = '2';
ufo.fillStyle = '#E0E1F3';
ufo.fill();

// body down ovni
ufo.beginPath();
ufo.moveTo(100, 200);
ufo.quadraticCurveTo(200, 280, 300, 200);
ufo.lineWidth = '2';
ufo.fillStyle = '#E0E1F3';
ufo.fill();
