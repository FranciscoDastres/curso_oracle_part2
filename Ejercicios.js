alert("Bienvenido al juego del número secreto");

// Agrega un console.log para verificar el valor de "intento" después de la entrada del usuario
let intento = prompt("Elige un número entre 1 y 10");
console.log("Valor de intento:", intento);

let numeroSecreto = 4;

// Agrega un console.log para verificar la comparación entre "intento" y "numeroSecreto"
console.log("Resultado de la comparación:", intento == numeroSecreto);

if (intento == numeroSecreto) {
  alert("Adivinaste");
} else {
  // Agrega un console.log para verificar el valor de "numeroSecreto" cuando el jugador se equivoca
  console.log("Valor del número secreto:", numeroSecreto);
  alert("El número secreto era " + numeroSecreto);
}
// dia de semana
let dia = prompt("¿Qué día de la semana es?");

if (dia.toLowerCase() === "sábado" || dia.toLowerCase() === "domingo") {
  alert("¡Buen fin de semana!");
} else {
  alert("¡Buena semana!");
}

// verificar si es positivo o negativo
let numero = Number(prompt("Ingresa un número:"));

if (numero > 0) {
  alert("El número es positivo.");
} else if (numero < 0) {
  alert("El número es negativo.");
} else {
  alert("El número es cero.");
}

// verificar si la puntuación es mayor o igual a 100
let puntuacion = Number(prompt("Ingresa tu puntuación:"));

if (puntuacion >= 100) {
  alert("¡Felicidades, has ganado!");
} else {
  alert("Inténtalo nuevamente para ganar.");
}
// saldo disponible
let saldo = Number(prompt("Ingresa tu saldo disponible:"));

alert(`Tu saldo actual es de $${saldo}`);

// nombre
let nombre = prompt("Ingresa tu nombre:");

alert(`¡Bienvenido, ${nombre}!`);

// contador
let contador = 1;

while (contador < 4) {
  console.log("Ejecutando la iteración " + contador);
  contador = contador + 1;
}

// contador 1 al 10
{
  let contador = 1;
  while (contador <= 10) {
    console.log(contador);
    contador++;
  }
}
// contador 10 al 0
{
  let contador = 10;
  while (contador >= 0) {
    console.log(contador);
    contador--;
  }
}
{
  // cuenta regresiva
  let numero = parseInt(prompt("Ingresa un número para la cuenta regresiva:"));
  let contador = numero;
  while (contador >= 0) {
    console.log(contador);
    contador--;
  }
}

{
  // cuenta progresiva
  let numero = parseInt(prompt("Ingresa un número para la cuenta progresiva:"));
  let contador = 0;
  while (contador <= numero) {
    console.log(contador);
    contador++;
  }
}
