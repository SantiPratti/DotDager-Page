// function([string1, string2],target id,[color1,color2])    
consoleText(['Dot Dager', 'Programacion', 'Filosofia', 'Gatos', 'Pepinos', 'Guitarras', 'Lumberjack'], 'text',['white','tomato','#AA5486','lightblue', 'green', 'violet']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}

// Array de URLs de imágenes para el navbar y la hero image
const navbarImages = [
  'images/logo.png',  // Imagen original
  'images/lumberjack.png', // Imagen alternativa
];


// Obtener elementos
const profileImage = document.querySelector('.profile-image');

// Función para cambiar la imagen aleatoriamente
function changeImageRandomly() {
  // Cambiar imagen del navbar aleatoriamente
  const randomNavbarImage = navbarImages[Math.floor(Math.random() * navbarImages.length)];
  profileImage.src = randomNavbarImage;

}

// Llamar a la función para cambiar las imágenes cada cierto tiempo (por ejemplo, cada 5 segundos)
setInterval(changeImageRandomly, 5000);  // 5000ms = 5 segundos
