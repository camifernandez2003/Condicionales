function draw() {}
let brushColor;
let baseColor1, baseColor2;
let brushX, brushY; // Posiciones del pincel
let easing = 0.1; // Suavidad del movimiento

function setup() {
  createCanvas(windowWidth, windowHeight);
  baseColor1 = color(250, 0, 100); // Color magenta
  baseColor2 = color(120, 150, 255); // Color morado
  brushColor = color(255, 255, 255); // Color del pincel
  brushX = mouseX;
  brushY = mouseY;
}

function draw() {
  drawGradientBackground();

  // Mezclar color del pincel si está sobre una zona de color
  checkBrushColor();

  // Suavizar el movimiento del pincel
  brushX += (mouseX - brushX) * easing;
  brushY += (mouseY - brushY) * easing;

  // Cambiar tamaño del pincel según la velocidad del mouse
  let speed = dist(mouseX, mouseY, pmouseX, pmouseY);
  let brushSize = map(speed, 10, 60, 80, 120, true);

  // Dibujar el pincel (círculo)
  fill(brushColor);
  noStroke();
  ellipse(brushX, brushY, brushSize, brushSize);
}

function drawGradientBackground() {
  //Crea un fondo con un degradado horizontal que va desde el color baseColor1 hasta el color baseColor2.
  for (let i = 0; i <= width; i++) {
    let inter = map(i, 0, width, 0, 1);
    let c = lerpColor(baseColor1, baseColor2, inter);
    stroke(c);
    line(i, 0, i, height);
  }
}

function checkBrushColor() {
  // Obtener el color debajo del mouse
  let currentColor = get(mouseX, mouseY);

  // Si el color actual es rojo, cambiar el color del pincel a rojo
  if (currentColor[0] > 240 && currentColor[1] < 50 && currentColor[2] > 90) {
    brushColor = lerpColor(brushColor, baseColor1, 0.05); // Mezcla suave con rojo
  }
  // Si el color actual es azul, cambiar el color del pincel a azul
  else if (
    currentColor[0] < 150 &&
    currentColor[1] < 190 &&
    currentColor[2] > 200
  ) {
    brushColor = lerpColor(brushColor, baseColor2, 0.05); // Mezcla suave con azul
  }
}
