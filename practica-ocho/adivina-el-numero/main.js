import './style.css';

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
const inputNumero = document.getElementById('numero');
const botonAdivinar = document.getElementById('adivinar');
const mensaje = document.getElementById('mensaje');

botonAdivinar.addEventListener('click', () => {
    const numeroJugador = parseInt(inputNumero.value);
    intentos++;

    if (isNaN(numeroJugador) || numeroJugador < 1 || numeroJugador > 100) {
        mensaje.textContent = 'Por favor, ingresa un número válido entre 1 y 100.';
    } else if (numeroJugador === numeroSecreto) {
        mensaje.textContent = `¡Felicidades! ¡Adivinaste el número en ${intentos} intento(s)!`;
        inputNumero.disabled = true;
        botonAdivinar.disabled = true;
    } else if (numeroJugador < numeroSecreto) {
        mensaje.textContent = `El número es más alto. Intento #${intentos}`;
    } else {
        mensaje.textContent = `El número es más bajo. Intento #${intentos}`;
    }

    inputNumero.value = ''; 
    inputNumero.focus();   
});
