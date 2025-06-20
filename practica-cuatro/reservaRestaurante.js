const mesasDisponibles = 10;  // Número de mesas disponibles para reservar

// Función que simula la verificación de disponibilidad de mesas
function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.2) {
        if (mesasSolicitadas <= mesasDisponibles) {
          resolve(`Mesas disponibles: ${mesasDisponibles - mesasSolicitadas}`);
        } else {
          reject("No hay suficientes mesas disponibles.");
        }
      }
      else {
        reject("Error al realizar la verificación de mesas disponibles.");
      }
    }, 1000);  
  });
}

// Función que simula el envío de un correo de confirmación
function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      /* Completa la lógica aquí: Simula un envío de correo. Usa Math.random() 
      para simular si el correo se envió correctamente o si ocurrió un error. */
    if (Math.random() > 0.2) {
      resolve(`Correo para confirmar reservación de ${nombreCliente}.`);
    } else {
      reject("Error al enviar el correo de confirmación.");
    }
    }, 1000);
  });
}

// Función principal para manejar una reserva
async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {
    console.log("Verificando disponibilidad de mesas...");
    const disponibilidad = await verificarDisponibilidad(mesasSolicitadas); 
    console.log(disponibilidad);
    console.log("Enviando correo de confirmación...");
    const confirmacion = await enviarConfirmacionReserva(nombreCliente);
    console.log(confirmacion);
  } catch (error) {
    console.log("Error:", error);  // Maneja los errores en la promesa
  }
}

// Llamada de prueba
hacerReserva("Juan Pérez", 8);  // Personas para reservar


