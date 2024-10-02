# Condicionales

Este es un proyecto para aprender a usar condicionales.

Adicionalmente hemos aprendido a usar el CDN de p5.js incluyendo el siguiente código dentro del `<head>` del archivo index.html de la siguiente manera:

```html
<script src="https://cdn.jsdelivr.net/npm/p5@1.11.0/lib/p5.min.js"></script>
```

Para empezar es importante tener en cuenta que se debe declarar la variable para después añadir:

```js
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  drawGradientBackground();
}
```

La función `drawGradientBackground()` crea un fondo con un degradado horizontal que va desde el color baseColor1 hasta el color baseColor2.

Aquí se utiliza la función `lerpColor()` para mezclar los colores `baseColor1` y `baseColor2`. El valor inter se utiliza para determinar la proporción de mezcla entre los dos colores en cada columna.

**El código detecta el color que está justo debajo del mouse en el canvas y cambia el color del pincel en función de dos zonas de color diferentes.** La función `get(mouseX, mouseY)` te da el color exacto del píxel donde está el mouse.
Ese color lo guardamos en currentColor.

Comparamos los valores RGB del color actual (currentColor) con el color de las zonas que queremos detectar.
Para cada componente del color (rojo, verde y azul), verificamos si el valor está dentro de un rango cercano, porque el color exacto puede variar un poco.

Si el mouse está en una de las zonas de color, el color del pincel cambia suavemente hacia ese color utilizando lerpColor, que mezcla gradualmente el color actual del pincel con el nuevo color.

El `currentColor` es una matriz que contiene tres valores, uno para R (rojo), G (verde) y B (azul).

> currentColor[0] representa el valor de R (rojo).
> currentColor[1] representa el valor de G (verde).
> currentColor[2] representa el valor de B (azul).

**¿Qué significa el símbolo &?**

El operador `&&` se usa para combinar condiciones, y el bloque de código solo se ejecutará si ambas condiciones son verdaderas

# Resumen

**Variables Globales**

`brushColor`: Color actual del pincel.
`baseColor1`: Color rojo para el fondo.
`baseColor2`: Color azul para el fondo.
`brushX, brushY`: Posiciones del pincel en el canvas.
`easing`: Controla la suavidad del movimiento del pincel.

**Funciones Principales**

`setup()`:

- Inicializa el canvas.
- Define los colores base y el color inicial del pincel (blanco).

`draw()`:

- Dibuja el fondo de gradiente.
- Llama a checkBrushColor() para mezclar el color del pincel si está sobre una zona de color.
- Suaviza el movimiento del pincel y ajusta su tamaño según la velocidad del mouse.
- Dibuja el pincel como un círculo en su posición actual.

`drawGradientBackground()`:

- Crea un fondo de gradiente entre baseColor1 (rojo) y baseColor2 (azul).

`checkBrushColor()`:

- Obtiene el color en la posición del mouse.
- Cambia el color del pincel a baseColor1 si el color actual se asemeja al rojo.
- Cambia el color del pincel a baseColor2 si el color actual se asemeja al azul.
